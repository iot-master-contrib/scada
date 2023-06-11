import {HmiComponent} from "../../hmi";

export const BaseGroup: HmiComponent = {
    name: '分组',
    id: 'group',
    icon: '',
    type: "shape",
    extends: {
        inherit: "rect",
        attrs: {
            rect: {
                fill: "#00000000",
                //fill: "none",
                //stroke: '#666',
                stroke: "none",
                strokeWidth: 2,
                strokeDasharray: "8 3"
            }
        }
    },
    meta: {
        visible: false
    },
    properties: [],
    listeners: {
        mouseenter: (cell, event) => {
            console.log("group enter")
            cell.setAttrByPath("rect/stroke", "#000")
        },
        mouseleave: (cell, event) => {
            console.log("group leave")
            cell.setAttrByPath("rect/stroke", "none")
        }
    }
}
