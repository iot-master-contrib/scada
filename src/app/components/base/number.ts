import {HmiComponent} from "../../hmi";
import {createStrokeProperties} from "../properties";

export const BaseNumber: HmiComponent = {
    name: '数值', id: 'number', icon: '/app/scada/assets/number.svg', type: "shape",
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
            text: {text: '123'},
        }
    },
    properties: [
        ...createStrokeProperties('rect'),
        {name: "小数位数", path: `data/format`, type: "number", default: 0},
    ],
    bindings: [
        {name: 'value', label: "数值", type: ''},
    ]
}
