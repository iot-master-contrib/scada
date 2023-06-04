import { HmiComponent } from "../../hmi";
import {createStrokeProperties} from "../properties";

export const BaseRect: HmiComponent = {
    name: '矩形', id: 'rect', icon: '/app/scada/assets/rect.svg', type: "shape",
    meta: { width: 100, height: 40 },
    properties: [

        ...createStrokeProperties('rect')
    ],
}
