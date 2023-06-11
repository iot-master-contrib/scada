import {HmiCollection, HmiComponent} from "../hmi";

import {BaseLine} from "./base/line";
import {BaseCircle} from "./base/circle";
import {BaseEllipse} from "./base/ellipse";
import {BaseRect} from "./base/rect";
import {BaseTriangle} from "./base/triangle";
import {BaseText} from "./base/text";
import {BaseImage} from "./base/image";

import {InputComponent} from "./input/input.component";
import {TimeComponent} from "./time/time.component";
import {SwitchComponent} from "./switch/switch.component";
import {ProgressComponent} from "./progress/progress.component";
import {TableComponent} from "./table/table.component";
import {SliderComponent} from "./slider/slider.component";
import {ButtonComponent} from "./button/button.component";


export const BaseComponents: HmiCollection = {
    name: '基础组件',
    components: [
        BaseLine, BaseCircle, BaseEllipse, BaseRect,
        BaseTriangle, BaseText, BaseImage,

        {name: '按钮', id: 'button', icon: '/app/scada/assets/button.svg', type: "angular", content: ButtonComponent},
        {name: '输入框', id: 'input', icon: '/app/scada/assets/input.svg', type: "angular", content: InputComponent},
        {name: '表格', id: 'table', icon: '/app/scada/assets/table.svg', type: "angular", content: TableComponent},
        {name: '时间', id: 'time', icon: '/app/scada/assets/time.svg', type: "angular", content: TimeComponent},
        {
            name: '开关', id: 'switch', icon: '/app/scada/assets/switch.svg', type: "angular", content: SwitchComponent,
            bindings: [{label: '开关', name: 'switch', type: ""}],
            events: [{label: '变化', name: 'change'}],

        },
        {name: '滑块', id: 'slider', icon: '/app/scada/assets/slider.svg', type: "angular", content: SliderComponent},
        {
            name: '进度条',
            id: 'progress',
            icon: '/app/scada/assets/progress.svg',
            type: "angular",
            content: ProgressComponent
        },
    ]
}

export const ChartComponent: HmiCollection = {
    name: '图表组件',
    components: [
        {name: '柱状图', id: 'chart-bar', icon: '/app/scada/assets/chart-bar.svg', type: "angular"},
        {name: '曲线图', id: 'chart-line', icon: '/app/scada/assets/chart-line.svg', type: "angular"},
        {name: '仪表盘', id: 'chart-gauge', icon: '/app/scada/assets/chart-gauge.svg', type: "angular"},
    ]
}


