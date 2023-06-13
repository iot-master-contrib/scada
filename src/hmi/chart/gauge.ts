import {HmiComponent} from "../hmi";

export const ChartGauge: HmiComponent = {
    name: '仪表盘', id: 'chart-gauge', icon: '/app/scada/assets/chart-gauge.svg', type: "html",
    meta: {width: 100, height: 100},
    effects: ["data"],
    html: (cell)=>{
        let div = document.createElement("div")


        return div
    },
    properties: [
    ],
}
