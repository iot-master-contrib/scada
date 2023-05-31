import { HmiCollection, HmiProperty, HmiComponent } from "../hmi";
import { InputComponent } from "./input/input.component";
import { TimeComponent } from "./time/time.component";
import { SwitchComponent } from "./switch/switch.component";
import { ProgressComponent } from "./progress/progress.component";
import { TableComponent } from "./table/table.component";
import { SliderComponent } from "./slider/slider.component";
import { ButtonComponent } from "./button/button.component";

import industryComponents from './configs/industry-components';
import electricComponents from "./configs/electric-components";
import LineConfig from "./configs/line-config";
import TextConfig from './configs/text-config';
export var strokeProperties: HmiProperty[] = [
    { name: "填充", path: "rect/fill", type: "color" },
    { name: "边框颜色", path: "rect/stroke", type: "color" },
    { name: "边框大小", path: "rect/stroke-width", type: "stroke" },
]
const componnetsConfig: HmiComponent[] = [{
    name: '圆形', id: 'circle', icon: '/assets/circle.svg', type: "shape",
    meta: { width: 100, height: 100 },
    properties: [],
},
{
    name: '椭圆', id: 'ellipse', icon: '/assets/ellipse.svg', type: "shape",
    meta: { width: 100, height: 60 },
    properties: [],
},
{
    name: '矩形', id: 'rect', icon: '/assets/rect.svg', type: "shape",
    meta: { width: 100, height: 40 },
    properties: [],
}];
for (let index = 0; index < componnetsConfig.length; index++) {
    const item = componnetsConfig[index];
    item.properties!.unshift({ name: "边框宽度", path: `attrs/${item.id}/strokeWidth`, type: "stroke" })
    item.properties!.unshift({ name: "边框颜色", path: `attrs/${item.id}/stroke`, type: "color" });
    item.properties!.unshift({ name: "填充", path: `attrs/${item.id}/fill`, type: "color" });
}
export var COMPONENTS: HmiCollection[] = [
    {
        name: '基础组件',
        nameEn: 'base',
        components: [
            LineConfig,
            ...componnetsConfig,
            TextConfig,
            {
                name: '图片', id: 'image', icon: '/assets/image.svg', type: "shape",
                meta: { width: 100, height: 80, imageUrl: '/assets/image.svg', },
                properties: [
                    { name: "图片", path: "attrs/image/xlink:href", type: "text" },
                ]
            },
            { name: '按钮', id: 'button', icon: '/assets/button.svg', type: "angular", content: ButtonComponent },
            { name: '输入框', id: 'input', icon: '/assets/input.svg', type: "angular", content: InputComponent },
            { name: '表格', id: 'table', icon: '/assets/table.svg', type: "angular", content: TableComponent },
            { name: '时间', id: 'time', icon: '/assets/time.svg', type: "angular", content: TimeComponent },
            { name: '开关', id: 'switch', icon: '/assets/switch.svg', type: "angular", content: SwitchComponent },
            { name: '滑块', id: 'slider', icon: '/assets/slider.svg', type: "angular", content: SliderComponent },
            { name: '进度条', id: 'progress', icon: '/assets/progress.svg', type: "angular", content: ProgressComponent },
        ]
    },
    {
        name: '图表组件',
        nameEn: 'chart',
        components: [
            { name: '柱状图', id: 'chart-bar', icon: '/assets/chart-bar.svg', type: "angular" },
            { name: '曲线图', id: 'chart-line', icon: '/assets/chart-line.svg', type: "angular" },
            { name: '仪表盘', id: 'chart-gauge', icon: '/assets/chart-gauge.svg', type: "angular" },
        ]
    },
    ...[industryComponents],
    ...[electricComponents]
]
