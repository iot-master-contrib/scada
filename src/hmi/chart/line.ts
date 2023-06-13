import {HmiComponent} from "../hmi";
import {LineSvg} from "./line.embed";

export const ChartLine: HmiComponent = {
    name: '折线图', id: 'chart-line', svg: LineSvg, type: "html",
    meta: {width: 100, height: 100},
    effects: ["data"],
    html: (cell)=>{
        let div = document.createElement("div")


        return div
    },
    properties: [
    ],
}
