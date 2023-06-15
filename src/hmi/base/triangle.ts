import { HmiComponent } from "../hmi";
import {TriangleSvg} from "./triangle.embed";
import {createStrokeProperties} from "../properties";

export const BaseTriangle: HmiComponent = {
    name: '三角形', id: 'triangle', svg: TriangleSvg, type: "shape",
    extends: { inherit: "path" },
    meta: { width: 100, height: 40, path: 'M20.5 18.5H4.5L12.5 5.5L20.5 18.5Z' },
    properties: [
        ...createStrokeProperties("path"),

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
                cell.setPropByPath("attrs/path/fill", color)
        }
    },
}
