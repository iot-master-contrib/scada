import {HmiComponent} from "../../hmi";
import {createStrokeProperties} from "../properties";

export const BaseText: HmiComponent = {
    name: '文本', id: 'text', icon: '/app/scada/assets/text.svg', type: "shape",
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
        //{ name: "文本", path: "attrs/label/text", type: "text" },
        //{ name: "颜色", path: "attrs/label/fill", type: "color" },
        // { name: "字体", path: "attrs/text/fontFamily", type: "font" },
        //{ name: "字号", path: "attrs/label/fontSize", type: "stroke" },
        ...createStrokeProperties('rect'),
    ],
}
