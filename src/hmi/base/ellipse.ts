import {HmiComponent} from "../hmi";
import {createStrokeProperties} from "../properties";
import {EllipseSvg} from "./ellipse.embed";

export const BaseEllipse: HmiComponent = {
    name: '椭圆', id: 'ellipse', svg: EllipseSvg, type: "shape", internal:true,
    meta: {width: 100, height: 60},
    properties: [
        ...createStrokeProperties('ellipse'),

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
            console.log("ellipse active ", value, color)

            if (color)
                cell.setPropByPath("attrs/ellipse/fill", color)
        }
    },
}
