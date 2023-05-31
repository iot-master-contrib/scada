import { HmiComponent } from "../../hmi";
const config: HmiComponent = {
    name: '文本', id: 'text-block', icon: '/assets/text.svg', type: "shape",
    meta: {
        width: 100,
        height: 40,
        text: 'text',
        attrs: {
            rect: {
                fill: 'none',
                stroke: 'none'
            },
            label: {
                fill: '#333',
                color: '#444',
                contenteditable: true
            }
        }
    },
    properties: [
        { name: "文本", path: "attrs/label/text", type: "text" },
        { name: "字体颜色", path: "attrs/label/fill", type: "color" },
        { name: "字体", path: "attrs/label/fontFamily", type: "font" },
        { name: "字号", path: "attrs/label/fontSize", type: "stroke" },
        { name: "填充", path: "attrs/rect/fill", type: "color" },
        { name: "边框颜色", path: "attrs/rect/stroke", type: "color" },
        { name: "边框宽度", path: "attrs/rect/strokeWidth", type: "stroke" },
    ],
}
export default config;