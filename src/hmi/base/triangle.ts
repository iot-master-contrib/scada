import { HmiComponent } from "../hmi";

export const BaseTriangle: HmiComponent = {
    name: '三角形', id: 'triangle', icon: '/app/scada/assets/triangle.svg', type: "shape",
    extends: { inherit: "path" },
    meta: { width: 100, height: 40, path: 'M20.5 18.5H4.5L12.5 5.5L20.5 18.5Z' },
    properties: [],
}
