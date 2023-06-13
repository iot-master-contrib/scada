import {HmiComponent} from "../hmi";
import {createStrokeProperties} from "../properties";
import {EllipseSvg} from "./ellipse.embed";

export const BaseEllipse: HmiComponent = {
    name: '椭圆', id: 'ellipse', svg: EllipseSvg, type: "shape", internal:true,
    meta: {width: 100, height: 60},
    properties: [
        ...createStrokeProperties('ellipse')
    ],
}
