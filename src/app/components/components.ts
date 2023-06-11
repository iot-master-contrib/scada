import {HmiCollection, HmiComponent} from "../hmi";

import {BaseLine} from "./base/line";
import {BaseCircle} from "./base/circle";
import {BaseEllipse} from "./base/ellipse";
import {BaseRect} from "./base/rect";
import {BaseTriangle} from "./base/triangle";
import {BaseText} from "./base/text";
import {BaseImage} from "./base/image";
import {ChartGauge} from "./chart/gauge";
import {ChartBar} from "./chart/bar";
import {ChartLine} from "./chart/line";


export const BaseComponents: HmiCollection = {
    name: '基础组件',
    components: [
        BaseLine, BaseCircle, BaseEllipse, BaseRect,
        BaseTriangle, BaseText, BaseImage,
    ]
}

export const ChartComponent: HmiCollection = {
    name: '图表组件',
    components: [
        ChartGauge, ChartBar, ChartLine,
    ]
}


