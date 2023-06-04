import {HmiComponent} from "../../hmi";

export const BaseImage: HmiComponent = {
    name: '图片',
    id: 'image',
    icon: '/app/scada/assets/image.svg',
    type: "shape",
    meta: {
        width: 100, height: 80,
        imageUrl: '/assets/image.svg',
    },
    properties: [
        {name: "图片", path: "attrs/image/xlink:href", type: "text"},
    ]
}
