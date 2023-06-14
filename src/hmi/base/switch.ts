import {HmiComponent} from "../hmi";
import {createStrokeProperties} from "../properties";
import {SwitchSvg} from "./switch.embed";
import {SwitchMeta} from "./switch.meta";
import {Cell} from "@antv/x6";

export const BaseSwitch: HmiComponent = {
    name: '三角形', id: 'triangle', svg: SwitchSvg, type: "shape",
    extends: {inherit: "path", markup: SwitchMeta.markup, attrs: SwitchMeta.attrs},
    meta: {width: 100, height: 40},
    properties: [
        //...createStrokeProperties("path")
    ],
    events: [{name: 'change', label: '变化'}],
    listeners: {
        click(cell: Cell){
            console.log('switch click')
            cell.setAttrByPath("attrs/path1/fill", "#9f916d")
        }
    }
}
