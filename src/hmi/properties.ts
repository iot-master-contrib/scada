import {HmiProperty, HmiPropertyOption} from "./hmi";


const fontFamilies: HmiPropertyOption[] = [
    {value: "SimHei", name: "黑体"},
    {value: "SimSun", name: "宋体"},
    {value: "NSimSun", name: "新宋体"},
    {value: "SimSun", name: "仿宋"},
    {value: "KaiTi", name: "楷体"},
    {value: "Microsoft JhengHei", name: "微软正黑体"},
    {value: "Microsoft YaHei", name: "微软雅黑体"},
]

const fontWeights: HmiPropertyOption[] = [
    {value: "normal", name: "正常"},
    {value: "bold", name: "加粗"},
    //{value: "bolder", name: "加粗+"},
]

const fontStyles: HmiPropertyOption[] = [
    {value: "normal", name: "正常"},
    {value: "italic", name: "斜体"},
]


export function createStrokeProperties(id: string): HmiProperty[] {
    return [
        {name: "填充", path: `attrs/${id}/fill`, type: "color"},
        {name: "边框颜色", path: `attrs/${id}/stroke`, type: "color"},
        {name: "边框大小", path: `attrs/${id}/stroke-width`, type: "stroke"},
    ]
}

export const TextProperties: HmiProperty[] = [
    {name: "文本", path: "attrs/text/text", type: "text"},
    {name: "文本颜色", path: "attrs/text/fill", type: "color"},
    {name: "字号", path: "attrs/text/fontSize", type: "stroke"},
    {name: "字体", path: "attrs/text/fontFamily", type: "select", options: fontFamilies},
    {name: "加粗", path: "attrs/text/fontWeight", type: "select", options: fontWeights},
    {name: "风格", path: "attrs/text/fontStyle", type: "select", options: fontStyles},
]
