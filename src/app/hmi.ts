import {Cell, Edge, Node, Registry} from "@antv/x6";
import {Component} from "@angular/core";

export declare interface HmiComponent {

    id: string

    name: string

    icon: string
    svgIcon?:any
    type: "line" | "shape" | "html" | "svg"

    internal?: boolean
    extends?: Node.Properties | Edge.Properties //继承 shape 或 edge

    meta?: Node.Metadata | Edge.Metadata

    //Angular组件
    //content?: any //Component

    //html组件
    effects?: string[]
    html?: ((cell: Cell) => void) | string

    //是否已经注册
    registered?: boolean

    //配置属性
    properties?: HmiProperty[]

    //开放的数据绑定
    bindings?: HmiComponentBinding[]

    //数据绑定的钩子
    hooks?: { [name: string]: ((value: any, cell: Cell) => void) | string }

    //开放的事件
    events?: HmiComponentEvent[]

    //animations?:

    //事件响应
    listeners?: { [event: string]: ((cell: Cell, event?: any) => void) | string }

    //集合名
    collection?: string
}

export declare interface HmiComponentBinding {
    name: string
    label: string
    type?: string
    default?: any
}

export declare interface HmiComponentEvent {
    name: string
    label: string
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
