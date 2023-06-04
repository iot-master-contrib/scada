import {HmiComponent} from "../../hmi";
import {createStrokeProperties} from "../properties";

export const BaseCircle: HmiComponent = {
    name: '圆形', id: 'circle', icon: '/assets/circle.svg', type: "shape",
    meta: {width: 100, height: 100},
    properties: [
        ...createStrokeProperties('circle')
    ],
}
