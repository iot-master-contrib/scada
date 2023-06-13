import {HmiComponent} from "../../hmi";
import {createStrokeProperties} from "../properties";
import {ObjectExt} from "@antv/x6";

export const BaseNumber: HmiComponent = {
    name: '数值', id: 'number', icon: '/app/scada/assets/number.svg', type: "shape",
    extends: {
        inherit: "rect",
        propHooks(meta:any){
            console.log("number propHooks", meta)
            const {data, ...others} = meta
            if (data) {
                let fixed = data.fixed || 0
                //ObjectExt.getByPath(meta, "data/fixed")
                ObjectExt.setByPath(meta, "attrs/text/text", data.value?.toFixed(fixed))
            }
            return meta
        }
    },
    meta: {
        width: 100,
        height: 30,
        attrs: {
            rect: {
                fill: 'none',
                stroke: 'none',
                strokeWidth: 2
            },
            text: {
                text: '123'
            },
        },
    },
    properties: [
        ...createStrokeProperties('rect'),
        {name: "小数位数", path: `data/fixed`, type: "number", default: 0},
    ],
    bindings: [
        {name: 'value', label: "数值", default: 12.06},
    ]
}
