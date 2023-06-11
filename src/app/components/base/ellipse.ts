import {HmiComponent} from "../../hmi";
import {createStrokeProperties} from "../properties";

export const BaseEllipse: HmiComponent = {
    name: '椭圆', id: 'ellipse', icon: '/app/scada/assets/ellipse.svg', type: "shape", internal:true,
    meta: {width: 100, height: 60},
    properties: [
        ...createStrokeProperties('ellipse')
    ],
}
