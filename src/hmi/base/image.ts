import {HmiComponent} from "../hmi";
import {ImageSvg} from "./image.embed";

export const BaseImage: HmiComponent = {
    name: '图片',
    id: 'image',
    svg: ImageSvg,
    type: "shape", internal:true,
    meta: {
        width: 100, height: 80,
        imageUrl: '/app/scada/assets/image.svg',
    },
    properties: [
        {name: "图片", path: "attrs/image/xlink:href", type: "text"},
    ]
}
