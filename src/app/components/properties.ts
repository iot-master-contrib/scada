import {HmiProperty} from "../hmi";

export function createStrokeProperties(id: string): HmiProperty[] {
    return [
        {name: "填充", path: `attrs/${id}/fill`, type: "color"},
        {name: "边框颜色", path: `attrs/${id}/stroke`, type: "color"},
        {name: "边框大小", path: `attrs/${id}/stroke-width`, type: "stroke"},
    ]
}

export const TextProperties: HmiProperty[] = [
    { name: "文本", path: "attrs/text/text", type: "text" },
    { name: "文本颜色", path: "attrs/text/fill", type: "color" },
    { name: "字号", path: "attrs/text/fontSize", type: "stroke" },
    { name: "字体", path: "attrs/text/fontFamily", type: "select", options:[] },
]
