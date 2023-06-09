import { HmiComponent } from "./hmi";
import { createStrokeProperties } from "./properties";
//import {Markup} from "@antv/x6/src/view/markup";
import { Markup, Registry } from "@antv/x6";


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
        extends: { inherit: "image" },
        meta: { width: 100, height: 80 },
        collection: cmp.collection
    }
}


export declare interface HmiPathComponent {
    fill?: string;
    id: string
    name: string
    svg: string
    path: string
    collection?: string
}


export function createPathComponent(cmp: HmiPathComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        svg: cmp.svg,
        type: "shape",
        extends: { inherit: "path" },
        meta: { width: 100, height: 80, path: cmp.path, attrs: { path: { fill: cmp.fill || 'none' } } },
        properties: [
            ...createStrokeProperties('path')
        ],
        collection: cmp.collection
    }
}


export declare interface HmiHtmlComponent {
    id: string
    name?: string
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
    name?: string
    svg: string
    width: number,
    height: number,
    markup?: Markup,
    attrs?: Registry.Attr.CellAttrs,
    collection?: string
}

export function createSvgComponent(cmp: HmiSvgComponent): HmiComponent {
    return {
        id: cmp.id,
        name: cmp.name,
        svg: cmp.svg,
        type: "svg",
        extends: { width: 100, height: 100, markup: cmp.markup, attrs: cmp.attrs },
        collection: cmp.collection,
        properties: [
            ...createStrokeProperties('all')
        ],
    }
}
