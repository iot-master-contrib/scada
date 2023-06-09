import { Component, Input } from '@angular/core';
import { Cell } from "@antv/x6";
import { HmiComponent, HmiComponentEvent } from "../../../hmi/hmi";
import { NzModalService } from "ng-zorro-antd/modal";
import { ListenerSettingComponent } from "../listener-setting/listener-setting.component";

@Component({
    selector: 'app-listener',
    templateUrl: './listener.component.html',
    styleUrls: ['./listener.component.scss']
})
export class ListenerComponent {
    @Input() cell!: Cell
    @Input() component!: HmiComponent

    click: HmiComponentEvent = { label: "点击", name: "click" }

    constructor(private ms: NzModalService) {
    }

    edit(e: HmiComponentEvent) {
        this.cell.data.listeners ||= {}
        this.ms.create({
            nzTitle: `编辑${e.label}事件脚本`,
            nzContent: ListenerSettingComponent,
            nzComponentParams: {
                content: this.cell.data.listeners[e.name] || ''
            },
            nzOnOk: ({ content }) => {
                const listeners = this.cell.data.listeners || {};
                this.cell.data.listeners = Object.assign(listeners, { [e.name]: content })
            }
        })
        //TODO OK中，将脚本回传 至 cell.data.listeners[e.name]
    }
}
