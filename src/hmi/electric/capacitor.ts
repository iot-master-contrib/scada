import { HmiComponent } from "../hmi";
import { CapacitorSvg } from "./capacitor.embed";
import { createStrokeProperties } from "../properties";

export const ElectricCapacitor: HmiComponent = {
    name: '电容', id: 'capacity', svg: CapacitorSvg, type: "shape",
    extends: { inherit: "path" },
    meta: {
        width: 100, height: 40,
        path: 'M460 215L314 215 314 50 284 50 284 410 314 410 314 245 460 245z,M146 215L0 215 0 245 146 245 146 410 176 410 176 50 146 50z',
        attrs: {
            path: {
                fill: '#000'
            }
        }
    },
    properties: [
        ...createStrokeProperties("path")
    ],
}
