import { Component, Input } from '@angular/core';
import { Cell } from "@antv/x6";
import { HmiProperty } from 'src/hmi/hmi';
import { AttachSelectComponent } from 'src/app/base/attach-select/attach-select.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
    selector: 'app-property-input',
    templateUrl: './property-input.component.html',
    styleUrls: ['./property-input.component.scss']
})
export class PropertyInputComponent {
    @Input() property!: HmiProperty;
    @Input() cell!: Cell

    constructor(
        private ms: NzModalService,
        private msg: NzMessageService,
    ) {
        const that = this;
        window.onload = () => {
            window.top!.onmessage = function ({ data }) {  // 监听 message 事件
                that.msg.success('选择成功!');
                that.cell.setPropByPath('attrs/image/xlink:href', data);
            };
        }
    }
    inputChange($event: any) {
        //console.log("property input change", this.property.path, $event);
        this.cell.setPropByPath(this.property.path, $event.target.value);
    }

    change($event: any) {
        //console.log("property change", this.property.path, $event)
        this.cell.setPropByPath(this.property.path, $event)

        //保存历史
        let colors = this.getPresentColors()
        let index = colors.indexOf($event)
        if (index > -1) {
            colors.splice(index, 1)
        }
        colors.unshift($event)
        if (colors.length > 12) {
            colors.length = 12
        }
        this.setPresentColors(colors)
    }

    getPresentColors() {
        let str = localStorage.getItem("present-colors")
        if (str) {
            try {
                return JSON.parse(str)
            } catch (e) {
            }
        }
        return []
    }

    setPresentColors(colors: any) {
        localStorage.setItem("present-colors", JSON.stringify(colors))
    }

    clearColor() {
        this.cell.setPropByPath(this.property.path, 'none')
    }

    handleSelectImage() {
        this.ms.create({
            nzTitle: `选择图片`,
            nzContent: AttachSelectComponent,
            nzComponentParams: {},
            nzFooter: null
        })
    }
}
