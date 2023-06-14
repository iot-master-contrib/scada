import {Component, ElementRef, OnInit} from '@angular/core';
import {HmiPage, HmiProject} from '../../hmi/hmi';
import {Cell, Graph} from "@antv/x6";
import {Title} from "@angular/platform-browser";
import {RequestService} from "../request.service";
import {ComponentService} from "../component.service";
import {ActivatedRoute} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
    id: any = ''

    project!: HmiProject
    graph!: Graph;

    index = 0;

    constructor(
        private title: Title,
        private element: ElementRef,
        private rs: RequestService,
        protected cs: ComponentService,
        private route: ActivatedRoute,
        private ns: NzNotificationService,
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
                cell.data.listeners?.click?.call(this, cell, e)

                let cmp = this.cs.Get(cell.shape)
                // @ts-ignore
                cmp?.listeners?.click?.call(this, cell, e)
            } catch (e: any) {
                this.ns.error("点击事件处理错误", e.message)
            }
        });

        this.graph.on('cell:mouseenter', ({cell, e}) => {
            try {
                let cmp = this.cs.Get(cell.shape)
                // @ts-ignore
                cmp?.listeners?.mouseenter?.call(this, cell, e)
            } catch (e: any) {
                this.ns.error("鼠标事件处理错误", e.message)
            }
        });

        this.graph.on('cell:mouseleave', ({cell, e}) => {
            try {
                let cmp = this.cs.Get(cell.shape)
                // @ts-ignore
                cmp?.listeners?.mouseleave?.call(this, cell, e)
            } catch (e: any) {
                this.ns.error("鼠标事件处理错误", e.message)
            }
        });

        this.graph.on("cell:custom", (e: any) => {
            //console.log('cell:custom', e.event, e.value)
            // 处理用户绑定的点击事件
            try {
                e.cell?.data.listeners?.[e.event]?.call(this, e.cell, e.value)
            } catch (e: any) {
                this.ns.error("组件事件响应处理错误", e.message)
            }
        })
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

        //监听事件
        this.graph.getCells().forEach(cell => {
            for (const k in cell.data.listeners) {
                if (!cell.data.listeners.hasOwnProperty(k)) continue
                const func = cell.data.listeners[k]
                if (typeof func === "string" && func.length > 0) {
                    try { // @ts-ignore
                        cell.data.listeners[k] = new Function('cell', 'event', func)
                    } catch (e: any) {
                        this.ns.error("编译错误", e.message)
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

    handlePageChange($event: number) {
        this.Render(this.project.pages[this.index])
    }
}
