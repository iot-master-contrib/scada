import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {HmiPage, HmiProject} from '../../hmi/hmi';
import {Cell, Graph} from "@antv/x6";
import {Title} from "@angular/platform-browser";
import {RequestService} from "../request.service";
import {ComponentService} from "../component.service";
import {ActivatedRoute} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {MqttService} from "ngx-mqtt";
import {Subscription} from "rxjs";
import {NzModalService} from "ng-zorro-antd/modal";
import {WindowComponent} from "./window/window.component";


//import "fengari-web"

//declare var fengari as any

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {
    id: any = ''

    project!: HmiProject
    graph!: Graph;

    index = 0;

    subs: Subscription[] = []

    tools: any = {
        go: (page: string) => {
            this.project.pages.forEach(value => {
                if (value.name == page)
                    this.Render(value)
            })
        },
        window: (url: string, width = 400, height = 300) => {
            this.ms.create({
                nzContent: WindowComponent,
                nzComponentParams: {url, width, height},
                nzWidth: width + 48,
                nzFooter: null,
            })
        },

    }

    constructor(
        private title: Title,
        private element: ElementRef,
        private rs: RequestService,
        protected cs: ComponentService,
        private route: ActivatedRoute,
        private ns: NzNotificationService,
        private ms: NzModalService,
        private mqtt: MqttService,
    ) {
        let mousewheel = route.snapshot.queryParams['mousewheel']
        let panning = route.snapshot.queryParams['panning']
        //title.setTitle(this.project.name)
        this.graph = new Graph({
            container: element.nativeElement,
            interacting: false,
            mousewheel: mousewheel == "true" || mousewheel == "1",
            panning: panning == "true" || panning == "1",
        });

        this.graph.on('cell:click', ({cell, e}) => {
            try {
                // 处理用户绑定的点击事件
                cell.data?.listeners?.click?.call(this, cell, e, this.tools)

                let cmp = this.cs.Get(cell.shape)
                // @ts-ignore
                cmp?.listeners?.click?.call(this, cell, e, this.tools)
            } catch (e: any) {
                this.ns.error("点击事件处理错误", e.message)
            }
        });

        this.graph.on('cell:mouseenter', ({cell, e}) => {
            try {
                let cmp = this.cs.Get(cell.shape)
                // @ts-ignore
                cmp?.listeners?.mouseenter?.call(this, cell, e, this.tools)
            } catch (e: any) {
                this.ns.error("鼠标事件处理错误", e.message)
            }
        });

        this.graph.on('cell:mouseleave', ({cell, e}) => {
            try {
                let cmp = this.cs.Get(cell.shape)
                // @ts-ignore
                cmp?.listeners?.mouseleave?.call(this, cell, e, this.tools)
            } catch (e: any) {
                this.ns.error("鼠标事件处理错误", e.message)
            }
        });

        this.graph.on("cell:custom", (e: any) => {
            //console.log('cell:custom', e.event, e.value)
            // 处理用户绑定的点击事件
            try {
                e.cell?.data.listeners?.[e.event]?.call(this, e.cell, e.value, this.tools)
            } catch (e: any) {
                this.ns.error("组件事件响应处理错误", e.message)
            }
        });

        //@ts-ignore
        //fengari.load("a+1")()


    }

    evaluate(expr: string, params: any) {
        const keys = Object.keys(params);
        const values = Object.values(params);
        return (new Function(...keys, 'return ' + expr))(...values)
    }


    public Render(page: HmiPage) {
        page.content?.cells?.forEach((cell: any) => {
            const cmp = this.cs.Get(cell.shape)
            //TODO 使用filter 过滤掉找不到组件的情况
        })
        this.graph.drawBackground({
            color: page.background_color,
            image: page.background_image,
        })
        this.graph.fromJSON(page.content)

        //TODO 调用组件的init

        //清空订阅
        this.subs.forEach(sub => sub.unsubscribe())
        this.subs = []

        //监听事件
        this.graph.getCells().forEach(cell => {
            const cmp = this.cs.Get(cell.shape)

            //数据绑定
            if (cell.data?.bindings)
                for (const k in cell.data.bindings) {
                    if (!cell.data.bindings.hasOwnProperty(k)) continue
                    const binding: any = cell.data.bindings[k]
                    console.log("binding", cmp.id, k, binding)

                    //binding
                    const topic = `up/property/${binding.product}/${binding.device}`
                    //订阅同一主题，只会响应最后一个，比较郁闷
                    const sub = this.mqtt.observe(topic).subscribe(res => {
                        const values = JSON.parse(res.payload.toString())
                        console.log("data", cmp.id, k, binding, values)
                        try { //@ts-ignore
                            cmp.hooks?.[k]?.call(this, cell, values[binding.variable])
                        } catch (e: any) {
                            this.ns.error("数据绑定错误", e.message)
                        }
                    })
                    this.subs.push(sub)
                }

            //事件处理编译
            if (cell.data?.listeners)
                for (const k in cell.data.listeners) {
                    if (!cell.data.listeners.hasOwnProperty(k)) continue
                    const func = cell.data.listeners[k]
                    if (typeof func === "string" && func.length > 0) {
                        try { // @ts-ignore
                            cell.data.listeners[k] = new Function('cell', 'event', 'tools', func)
                        } catch (e: any) {
                            this.ns.error("脚本编译错误" + k, func + ' ' + e.message)
                            cell.data.listeners[k] = () => {
                                this.ns.error("组件脚本错误" + k, func + ' ' + e.message)
                            }
                        }
                    }
                }
        })
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.rs.get(`api/project/${this.id}`).subscribe((res) => {
            this.project = res.data;
            this.title.setTitle(this.project.name)
            this.Render(this.project.pages[0])
        });
    }

    ngOnDestroy(): void {
        this.subs.forEach(sub => sub.unsubscribe())
    }

    handlePageChange($event: number) {
        this.Render(this.project.pages[this.index])
    }

}
