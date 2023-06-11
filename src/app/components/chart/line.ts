import {HmiComponent} from "../../hmi";

export const ChartLine: HmiComponent = {
    name: '折线图', id: 'chart-line', icon: '/app/scada/assets/chart-line.svg', type: "html",
    meta: {width: 100, height: 100},
    effects: ["data"],
    html: (cell)=>{
        let div = document.createElement("div")


        return div
    },
    properties: [
    ],
}
