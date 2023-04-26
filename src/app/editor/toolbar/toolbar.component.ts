import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

    @Output() action = new EventEmitter<string>()

    groups: any = [
        [
            {name: "save", icon: "save", title: "保存"},
            {name: "export", icon: "export", title: "导出"},
        ],
        [
            {name: "undo", icon: "undo", title: "撤销"},
            {name: "redo", icon: "redo", title: "重做"},
        ],
        [
            {name: "cut", icon: "scissor", title: "剪切"},
            {name: "copy", icon: "copy", title: "复制"},
            {name: "paste", icon: "snippets", title: "粘贴"},
            {name: "delete", icon: "delete", title: "删除"},
        ],
        [
            {name: "align-left", icon: "align-left", title: "左对齐"},
            {name: "align-center", icon: "align-center", title: "居中对齐"},
            {name: "align-right", icon: "align-right", title: "右对齐"},
        ],
        [
            {name: "valign-top", icon: "vertical-align-top", title: "上对齐"},
            {name: "valign-middle", icon: "vertical-align-middle", title: "居中对齐"},
            {name: "valign-bottom", icon: "vertical-align-bottom", title: "下对齐"},
        ],
        [
            {name: "move-top", icon: "vertical-right", title: "置顶", rotate: 90},
            {name: "move-up", icon: "up", title: "上移一层"},
            {name: "move-down", icon: "down", title: "下移一层"},
            {name: "move-bottom", icon: "vertical-left", title: "置底", rotate: 90},
        ],
        [
            {name: "group", icon: "group", title: "组合"},
            {name: "ungroup", icon: "ungroup", title: "解除组合"}
        ]
    ]

}
