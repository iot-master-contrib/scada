import {HmiComponent} from "../hmi";
import {createStrokeProperties, TextProperties} from "../properties";
import {TextSvg} from "./text.embed";

export const BaseText: HmiComponent = {
    name: '文本', id: 'text', svg: TextSvg, type: "shape",
    extends: {inherit: "rect"},
    meta: {
        width: 100,
        height: 30,
        attrs: {
            rect: {
                fill: 'none',
                stroke: 'none',
                strokeWidth: 2
            },
            text: {text: '文本框'},
        }
    },
    properties: [
        ...TextProperties,
        ...createStrokeProperties('rect'),

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
                cell.setPropByPath("attrs/text/stroke", color)
        }
    },
}
