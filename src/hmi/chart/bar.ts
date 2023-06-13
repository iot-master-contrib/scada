import {HmiComponent} from "../hmi";
import {BarSvg} from "./bar.embed";

export const ChartBar: HmiComponent = {
    name: '柱状图', id: 'chart-bar', svg: BarSvg, type: "html",
    meta: {width: 100, height: 100},
    effects: ["data"],
    html: (cell)=>{
        let div = document.createElement("div")


        return div
    },
    properties: [
    ],
}
