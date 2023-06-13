import { HmiComponent } from "../hmi";
import { createStrokeProperties } from "./properties";

export function createImageComponent(cmp: HmiImageComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        icon: cmp.url,
        type: "shape",
        extends: { inherit: "image" },
        meta: { width: 100, height: 80, imageUrl: cmp.url },
        properties: [],
        collection: cmp.collection
    }
}



export declare interface HmiImageComponent {
    id: string
    name: string
    url: string
    collection?: string
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
        extends: { inherit: "path" },
        meta: { width: 100, height: 80, path: cmp.path },
        properties: [],
        collection: cmp.collection
    }
}


export declare interface HmiHtmlComponent {
    id: string
    name: string
    icon: string
    html: string
    collection?: string
}

export function createHtmlComponent(cmp: HmiHtmlComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        icon: cmp.icon,
        type: "html",
        effects: ['data'],
        html: cmp.html,
        collection: cmp.collection
    }
}

export declare interface HmiSvgComponent {
    id: string
    name: string
    icon: string
    svgIcon?: any;
    collection?: string
}


export function createSvgComponent(cmp: HmiSvgComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        icon: cmp.icon,
        type: "svg",
        effects: ['data'],
        collection: cmp.collection,
        properties: [
            ...createStrokeProperties('foreignObject/body')
        ],
    }
}
