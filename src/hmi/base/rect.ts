import { HmiComponent } from "../hmi";
import {createStrokeProperties} from "../properties";
import {RectSvg} from "./rect.embed";

export const BaseRect: HmiComponent = {
    name: '矩形', id: 'rect', svg: RectSvg, type: "shape", internal:true,
    meta: { width: 100, height: 40 },
    properties: [

        ...createStrokeProperties('rect')
    ],
}
