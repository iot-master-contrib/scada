import {Cell, Edge, Node, Registry} from "@antv/x6";
import {Component} from "@angular/core";

export declare interface HmiComponent {

    id: string

    name: string

    icon: string

    type: string

    extends?: any //继承 shape 或 edge

    meta?: Node.Metadata | Edge.Metadata

    //Angular组件
    content?: any //Component

    //是否已经注册
    registered?: boolean

    //配置属性
    properties?: HmiProperty[]

    //开放的数据绑定
    bindings?: HmiComponentBinding[]

    //开放的事件
    events?: HmiComponentEvent[]

    //animations?:

    //事件响应
    listeners?: { [event: string]: (cell: Cell, event?: any) => void }

    //集合名
    collection?: string
}

export declare interface HmiComponentBinding {
    name: string
    label: string
    type: string
}

export declare interface HmiComponentEvent {
    name: string
    label: string
}


export declare interface HmiImageComponent {
    id: string
    name: string
    url: string
    collection?: string
}

export function createImageComponent(cmp: HmiImageComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        icon: cmp.url,
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
    id: string
    name: string
    //nameEn: string
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
    background_color?: string
    background_image?: string
}

export function projectTemplate(): HmiProject {
    return {
        id: '',
        name: '组态工程',
        desc: '',
        width: window.screen.width, //自动获取屏幕尺寸
        height: window.screen.height,
        pages: [
            {
                name: "首页",
                content: {}
            }
        ]
    }
}
