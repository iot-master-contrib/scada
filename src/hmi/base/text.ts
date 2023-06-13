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
    ],
}