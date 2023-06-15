import {HmiComponent} from "../hmi";
import {createStrokeProperties} from "../properties";
import {CircleSvg} from "./circle.embed";

export const BaseCircle: HmiComponent = {
    name: '圆形', id: 'circle', svg: CircleSvg, type: "shape", internal: true,
    meta: {width: 100, height: 100},
    properties: [
        ...createStrokeProperties('circle'),

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
                cell.setPropByPath("attrs/circle/fill", color)
        }
    },
}
