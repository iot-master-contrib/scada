import {Edge, Node, Registry} from "@antv/x6";
import {Component} from "@angular/core";

export declare interface HmiComponent {

    id: string

    name: string

    icon: string

    type: string

    extends?: any //继承 shape 或 edge

    meta?: Node.Metadata | Edge.Metadata

    content?: any //Component

    registered?: boolean

    properties?: HmiProperty[]
}

export declare interface HmiCollection {
    name: string

    components: HmiComponent[]
}

export declare interface HmiDraw {
    event?: DragEvent
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
        "boolean" | "font" | "font-size" | "font-style" | "stroke"
    default?: any
    options?: HmiPropertyOption[]
    max?: number
    min?: number
    step?: number
}
