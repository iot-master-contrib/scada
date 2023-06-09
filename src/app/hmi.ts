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

    collection?: string
}

export declare interface HmiImageComponent {
    id: string
    name: string
    url: string
    icon?: string
    collection?: string
}

export function createImageComponent(cmp: HmiImageComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        icon: cmp.icon || cmp.url,
        type: "shape",
        extends: {inherit: "image"},
        meta: {width: 100, height: 80, imageUrl: cmp.url},
        properties: [],
        collection: cmp.collection
    }
}

export declare interface HmiPathComponent {
    id: string
    name: string
    icon: string
    path: string
    collection?: string
}


export function createPathComponent(cmp: HmiPathComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        icon: cmp.icon,
        type: "shape",
        extends: {inherit: "path"},
        meta: {width: 100, height: 80, path: cmp.path},
        properties: [],
        collection: cmp.collection
    }
}

export declare interface HmiCollection {
    name: string
    nameEn: string
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


export declare interface HmiProject {
    id: string
    name: string
    desc: string
    width: number
    height: number
    pages: HmiPage[]
}

export declare interface HmiPage {
    name: string
    content: any
}
