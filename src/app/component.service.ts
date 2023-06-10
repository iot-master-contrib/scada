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

@Injectable({
    providedIn: 'root'
})
export class ComponentService {

    public collections: HmiCollection[] = []
    public components: { [id: string]: HmiComponent } = {}

    constructor(private rs: RequestService) {
        this.RegisterCollection(BaseComponents)
        this.RegisterCollection(ChartComponent)
        this.RegisterCollection(IndustryComponents)
        this.RegisterCollection(ElectricComponents)

        this.load()
    }

    load() {
        this.rs.get("api/collection/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c:any)=>this.RegisterCollection(c))
            this.loadComponent();
        })
    }

    loadComponent() {
        this.rs.get("api/component/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c:any)=>this.RegisterComponent(c))
        })
        this.rs.get("api/image/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c:any)=>this.RegisterImage(c))
        })
        this.rs.get("api/path/list", {limit: 99999}).subscribe(res => {
            res.data?.forEach((c:any)=>this.RegisterPath(c))
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
