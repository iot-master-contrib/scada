import {HmiComponent} from "../../hmi";
import {createStrokeProperties, TextProperties} from "../properties";

export const BaseNumber: HmiComponent = {
    name: '数值', id: 'number', icon: '/app/scada/assets/number.svg', type: "shape",
    extends: {inherit: "rect"},
    meta: {
        width: 100,
        height: 30,
        attrs: {
            rect: {fill: 'none', stroke: 'none'},
            text: {text: 'number'},
        },
    },
    properties: [
        ...TextProperties,
        ...createStrokeProperties('rect'),
        {name: "小数位数", path: `data/fixed`, type: "number", default: 0},
    ],
    bindings: [
        {name: 'value', label: "数值", default: 12.06},
    ],
    hooks: {
        value(value, cell) {
            let fixed = cell.getPropByPath("data/fixed") || 0
            cell.setPropByPath("attrs/text/text", value?.toFixed(fixed))
        }
    },
}
