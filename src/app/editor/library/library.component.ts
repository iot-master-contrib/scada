import {Component, EventEmitter, Output} from '@angular/core';
import {HmiCollection, HmiComponent, HmiDrag} from "../../hmi";


@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent {


    @Output() onDrag = new EventEmitter<HmiDrag>()

    collections: HmiCollection[] = [
        {
            name: '基础组件',
            components: [
                {name: '矩形',id: 'rect',icon: '/assets/rect.svg'},
                {name: '圆形',id: 'circle',icon: '/assets/circle.svg'},
                {name: '直线',id: 'line',icon: '/assets/line.svg'},
                {name: '折线',id: 'polyline',icon: '/assets/polyline.svg'},
                {name: '图片',id: 'image',icon: '/assets/image.svg'},
                {name: '按钮',id: 'image',icon: '/assets/button.svg'},
                {name: '输入框',id: 'image',icon: '/assets/input.svg'},
                {name: '文本框',id: 'image',icon: '/assets/text.svg'},
                {name: '进度条',id: 'image',icon: '/assets/progress.svg'},
            ]
        },
        {
            name: '图表组件',
            components: [
                {name: '柱状图',id: 'chart-bar',icon: '/assets/chart-bar.svg'},
                {name: '曲线图',id: 'chart-line',icon: '/assets/chart-line.svg'},
                {name: '仪表盘',id: 'chart-gauge',icon: '/assets/chart-gauge.svg'},
            ]
        }
    ]


}
