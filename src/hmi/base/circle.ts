import {HmiComponent} from "../hmi";
import {createStrokeProperties} from "../properties";
import {CircleSvg} from "./circle.embed";

export const BaseCircle: HmiComponent = {
    name: '圆形', id: 'circle', svg: CircleSvg, type: "shape", internal:true,
    meta: {width: 100, height: 100},
    properties: [
        ...createStrokeProperties('circle')
    ],
}
