import {HmiProperty} from "../hmi";

export function createStrokeProperties(id: string): HmiProperty[] {
    return [
        {name: "填充", path: `attrs/${id}/fill`, type: "color"},
        {name: "边框颜色", path: `attrs/${id}/stroke`, type: "color"},
        {name: "边框大小", path: `attrs/${id}/stroke-width`, type: "stroke"},
    ]
}
