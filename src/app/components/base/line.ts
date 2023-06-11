import {HmiComponent} from "../../hmi";
import {createStrokeProperties} from "../properties";

export const BaseLine: HmiComponent = {
    name: '线条', id: 'line', icon: '/app/scada/assets/line.svg', type: "line",
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
        tools: {items: ['edge-editor']},
    },
    meta: {},
    properties: [

        ...createStrokeProperties('line'),
    ],
}
