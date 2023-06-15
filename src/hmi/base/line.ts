import {HmiComponent} from "../hmi";
import {createStrokeProperties} from "../properties";
import {LineSvg} from "./line.embed";

export const BaseLine: HmiComponent = {
    name: '线条', id: 'line', svg: LineSvg, type: "line",
    extends: {
        inherit: "edge",
        markup: [
            {
                tagName: 'path',
                selector: 'line',
                attrs: {
                    fill: 'none',
                    cursor: 'move',
                    pointerEvents: 'none',
                },
            },
            {
                tagName: 'path',
                selector: 'wrap',
                attrs: {
                    fill: 'none',
                    cursor: 'move',
                    stroke: 'transparent',
                    strokeLinecap: 'round',
                },
            },
        ],
        attrs: {
            wrap: {
                connection: true,
                strokeWidth: 10,
                strokeLinejoin: 'round',
            },
            line: {
                connection: true,
                stroke: '#000',
                strokeWidth: 2,
                strokeLinejoin: 'round',
                targetMarker: null,
            },
        },
        tools: {items: ['edge-editor']},
    },
    meta: {},
    properties: [

        ...createStrokeProperties('line'),

        {name: "默认颜色", path: `data/deactivatedColor`, type: "color"},
        {name: "激活颜色", path: `data/activatedColor`, type: "color"},
    ],
    bindings: [
        {name: 'active', label: "激活"},
    ],
    hooks: {
        active(cell, value) {
            let color = value ?
                cell.getPropByPath("data/activatedColor") :
                cell.getPropByPath("data/deactivatedColor")

            if (color)
                cell.setPropByPath("attrs/line/stroke", color)
        }
    },
}
