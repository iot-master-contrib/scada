import {HmiComponent} from "../hmi";

export const ChartBar: HmiComponent = {
    name: '柱状图', id: 'chart-bar', icon: '/app/scada/assets/chart-bar.svg', type: "html",
    meta: {width: 100, height: 100},
    effects: ["data"],
    html: (cell)=>{
        let div = document.createElement("div")


        return div
    },
    properties: [
    ],
}
