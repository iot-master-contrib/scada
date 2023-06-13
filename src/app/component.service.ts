import {Injectable, Injector} from '@angular/core';
import {RequestService} from "./request.service";
import {HmiCollection, HmiComponent} from "./hmi";
import {BaseComponents, ChartComponent} from "./components/components";
import {IndustryComponents} from "./components/industry/components";
import {ElectricComponents} from "./components/electric/components";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {Subject} from "rxjs";
import {Cell, Graph, Shape} from "@antv/x6";
import {register} from "@antv/x6-angular-shape";
import {BaseGroup} from "./components/base/group";
import {
    createHtmlComponent,
    createImageComponent,
    createPathComponent,
    HmiHtmlComponent,
    HmiImageComponent,
    HmiPathComponent
} from "./components/creator";

@Injectable({
    providedIn: 'root'
})
export class ComponentService {

    //TODO 处理加载中
    public ready = false
    public readySub = new Subject<boolean>()

    public Ready() {
        return this.readySub.asObservable()
    }

    public collections: HmiCollection[] = []
    public components: { [id: string]: HmiComponent } = {}

    constructor(private rs: RequestService, private ns: NzNotificationService) {

        this.PutCollection(BaseComponents)
        this.PutCollection(ChartComponent)
        this.PutCollection(IndustryComponents)
        this.PutCollection(ElectricComponents)

        this.PutComponent(BaseGroup)
        //this.PutComponent(BaseGroup)

        this.load()
    }

    load() {
        this.rs.get("api/component/list", { limit: 99999 }).subscribe(res => {
            res.data?.forEach((c: any) => this.PutComponent(c))
        })
        this.rs.get("api/image/list", { limit: 99999 }).subscribe(res => {
            res.data?.forEach((c: any) => this.PutImage(c))
        })
        this.rs.get("api/path/list", { limit: 99999 }).subscribe(res => {
            res.data?.forEach((c: any) => this.PutPath(c))
        })
        this.rs.get("api/html/list", { limit: 99999 }).subscribe(res => {
            res.data?.forEach((c: any) => this.PutHtml(c))
        })
    }

    public PutImage(component: HmiImageComponent) {
        const c = createImageComponent(component)
        this.PutComponent(c)
    }

    public PutPath(component: HmiPathComponent) {
        const c = createPathComponent(component)
        this.PutComponent(c)
    }

    public PutHtml(component: HmiHtmlComponent) {
        const c = createHtmlComponent(component)
        this.PutComponent(c)
    }


    public PutComponent(component: HmiComponent) {
        this.components[component.id] = component

        //找集合 TODO 索引一下？？？
        if (component.collection) {
            let found = false;
            this.collections.forEach(c => {
                if (c.name == component.collection) {
                    c.components.push(component)
                    found = true
                }
            })
            if (!found) {
                this.collections.push({ name: component.collection, components: [component] })
            }
        } else {
            //TODO 处理未分类组件
        }

        //编译监听事件
        if (component.listeners) {
            for (let k in component.listeners) {
                if (!component.listeners.hasOwnProperty(k)) return
                const func = component.listeners[k]
                if (typeof func === "string") {
                    //编译
                    try {
                        // @ts-ignore
                        component.listeners[k] = new Function('cell', 'event', func)
                    } catch (e: any) {
                        this.ns.error("编译错误", e.message)
                    }
                }
            }
        }

        //HTML组件
        if (typeof component.html === "string") {
            //编译
            try {
                // @ts-ignore
                component.html = new Function('cell', func)
            } catch (e: any) {
                this.ns.error("编译错误", e.message)
            }
        }
    }

    public PutCollection(collection: HmiCollection) {
        this.collections.push(collection)
        collection.components = collection.components || []
        collection.components.forEach(c => {
            this.components[c.id] = c
        })
    }


    public CheckRegister(component: HmiComponent) {
        if (component.registered || component.internal)
            return

        switch (component.type) {
            case "line":
                //注册线
                if (component.extends) {
                    Graph.registerEdge(component.id, component.extends)
                    component.registered = true
                }
                break
            case "shape":
                //注册衍生组件
                if (component.extends) {
                    Graph.registerNode(component.id, component.extends)
                    component.registered = true
                }
                break;
            case "html":
                //注册衍生组件
                Shape.HTML.register({
                    shape: component.id,
                    effects: component.effects,
                    html: component.html as (cell: Cell) => HTMLHtmlElement,
                    ...component.extends
                })
                component.registered = true
                break;
            // case "angular":
            //     register({
            //         shape: component.id,
            //         content: component.content,
            //         width: 100,
            //         height: 60,
            //         // @ts-ignore
            //         injector: injector,
            //     })
            //     component.registered = true
            //     break;
        }
    }

    public Get(id: string): HmiComponent {
        const cmp = this.components[id]
        cmp && this.CheckRegister(cmp)
        return cmp
    }


}
