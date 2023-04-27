import {Node} from "@antv/x6";
import {Component} from "@angular/core";

export declare interface HmiComponent {

    id: string

    name: string

    icon: string

    type: string

    meta?: Node.Metadata

    content?: any //Component
    registered?: boolean

    properties?: HmiProperty[]
}

export declare interface HmiCollection {
    name: string

    components: HmiComponent[]
}

export declare interface HmiDrag {
    event: DragEvent
    component: HmiComponent
}

export declare interface HmiPropertyOption {
    name: string
    value: any
}

export declare interface HmiProperty {
    name: string
    path: string
    type: "number" | "text" | "color" | "select" |
        "checkbox" | "font" | "font-size" | "font-style" | "stroke"
    default?: any
    options?: HmiPropertyOption[]
    max?: number
    min?: number
    step?: number
}
