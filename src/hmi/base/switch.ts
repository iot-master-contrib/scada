import {HmiComponent} from "../hmi";

import {SwitchSvg} from "./switch.embed";
import {SwitchMeta} from "./switch.meta";
import {Cell} from "@antv/x6";

export const BaseSwitch: HmiComponent = {
    name: '开关', id: 'switch', svg: SwitchSvg, type: "shape",
    extends: {markup: SwitchMeta.markup, attrs: SwitchMeta.attrs},
    meta: {width: 100, height: 40},
    properties: [
        //...createStrokeProperties("path")
    ],
    events: [{name: 'change', label: '变化'}],
    listeners: {
        click(cell: Cell){
            console.log('switch click')
            cell.setAttrByPath("path1/fill", "#9f916d")
        }
    }
}
