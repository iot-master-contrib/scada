import { HmiComponent } from "../../hmi";

const config: HmiComponent = {
    name: '线条', id: 'line', icon: '/assets/line.svg', type: "line",
    extends: {
        inherit: "edge",
        markup: [
            {
                tagName: 'path',
                selector: 'line',
                attrs: {
                    fill: 'none',
                    cursor: 'move',
                    pointerEvents: 'none',
                },
            },
            {
                tagName: 'path',
                selector: 'wrap',
                attrs: {
                    fill: 'none',
                    cursor: 'move',
                    stroke: 'transparent',
                    strokeLinecap: 'round',
                },
            },
        ],
        attrs: {
            wrap: {
                connection: true,
                strokeWidth: 10,
                strokeLinejoin: 'round',
            },
            line: {
                connection: true,
                stroke: '#000',
                strokeWidth: 2,
                strokeLinejoin: 'round',
                targetMarker: null,
            },
        },
    },
    meta: {},
    properties: [
        { name: "线条颜色", path: "attrs/line/stroke", type: "color" },
        { name: "线条宽度", path: "attrs/line/strokeWidth", type: "stroke" },
    ],
}
export default config