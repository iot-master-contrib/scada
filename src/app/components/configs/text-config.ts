import { HmiComponent } from "../../hmi";
const config: HmiComponent = {
    name: '文本', id: 'text-block', icon: '/assets/text.svg', type: "shape",
    meta: {
        width: 100,
        height: 40,
        attrs: {
            rect: {
                fill: 'none',
                stroke: 'transparent'
            },
            label: {
                text: 'Text'
            }
        }
    },
    properties: [
        { name: "文本", path: "attrs/label/text", type: "text" },
        { name: "颜色", path: "attrs/label/fill", type: "color" },
        { name: "字体", path: "attrs/label/font", type: "font" },
        { name: "字号", path: "attrs/label/fontSize", type: "stroke" },
        { name: "填充", path: "attrs/rect/fill", type: "color" },
        { name: "边框颜色", path: "attrs/rect/stroke", type: "color" },
        { name: "边框大小", path: "attrs/rect/strokeWidth", type: "stroke" },
    ],
}
export default config;