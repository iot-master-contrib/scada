import {Injectable} from '@angular/core';
import {RequestService} from "./request.service";
import {
    createImageComponent,
    createPathComponent,
    HmiCollection,
    HmiComponent,
    HmiImageComponent,
    HmiPathComponent
} from "./hmi";
import {BaseComponents, ChartComponent} from "./components/components";
import {IndustryComponents} from "./components/industry/components";
import {ElectricComponents} from "./components/electric/components";
import {Subject} from "rxjs";
import {NzNotificationService} from "ng-zorro-antd/notification";

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
        this.RegisterCollection(BaseComponents)
        this.RegisterCollection(ChartComponent)
        this.RegisterCollection(IndustryComponents)
        this.RegisterCollection(ElectricComponents)

        this.load()
    }

    load() {
        this.rs.get("api/collection/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c: any) => this.RegisterCollection(c))
            this.loadComponent();
        })
    }

    loadComponent() {
        this.rs.get("api/component/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c: any) => this.RegisterComponent(c))
        })
        this.rs.get("api/image/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c: any) => this.RegisterImage(c))
        })
        this.rs.get("api/path/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c: any) => this.RegisterPath(c))
        })
    }

    public RegisterImage(component: HmiImageComponent) {
        const c = createImageComponent(component)
        this.RegisterComponent(c)
    }

    public RegisterPath(component: HmiPathComponent) {
        const c = createPathComponent(component)
        this.RegisterComponent(c)
    }

    public RegisterComponent(component: HmiComponent) {
        this.components[component.id] = component
        this.collections.forEach(c => {
            if (c.id == component.collection) {
                c.components.push(component)
            }
        })
        //TODO 处理未分类组件

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
    }

    public RegisterCollection(collection: HmiCollection) {
        this.collections.push(collection)
        collection.components = collection.components || []
        collection.components.forEach(c => {
            this.components[c.id] = c
        })
    }

    public GetComponent(id: string): HmiComponent {
        return this.components[id]
    }


}
