import {Node} from "@antv/x6";
import {Component} from "@angular/core";

export declare interface HmiComponent {

    id: string
    name: string

    icon: string

    type: string

    meta?: Node.Metadata

    content?: any //Component
}

export declare interface HmiCollection {
    name: string

    components: HmiComponent[]
}

export declare interface HmiDrag {
    event: DragEvent
    component: HmiComponent
}
