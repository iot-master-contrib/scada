import {HmiComponent} from "../hmi";
import {GaugeSvg} from "./gauge.embed";

export const ChartGauge: HmiComponent = {
    name: '仪表盘', id: 'chart-gauge', svg: GaugeSvg, type: "chart",
    meta: {width: 100, height: 100},
    effects: ["data"],
    html: (cell)=>{
        let div = document.createElement("div")


        return div
    },
    properties: [
    ],
}
