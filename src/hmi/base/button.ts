import { HmiComponent } from "../hmi";

import { ButtonSvg } from "./button.embed";
import { ButtonMeta } from "./button.meta";
import { Cell } from "@antv/x6";
import { createStrokeProperties, TextProperties } from "../properties";

export const BaseButton: HmiComponent = {
    name: '开关', id: 'button', svg: ButtonSvg, type: "shape",
    extends: {
        inherit: 'rect',
        attrs: {
            rect: {
                fill: '#1890ff',
                stroke: '#1890ff'
            },
            text: {
                text: "按钮",
                fill: "#fff",
            },
        }
    },
    meta: { width: 100, height: 40 },
    properties: [
        ...TextProperties,
        ...createStrokeProperties("rect"),
    ],
    listeners: {
        click(cell: Cell) {
        }
    }
}