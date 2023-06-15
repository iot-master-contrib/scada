import { HmiComponent } from "../hmi";
import {createStrokeProperties} from "../properties";
import {RectSvg} from "./rect.embed";

export const BaseRect: HmiComponent = {
    name: '矩形', id: 'rect', svg: RectSvg, type: "shape", internal:true,
    meta: { width: 100, height: 40 },
    properties: [

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
                cell.setPropByPath("attrs/rect/fill", color)
        }
    },
}
