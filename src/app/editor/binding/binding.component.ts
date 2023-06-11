import {Component, Input} from '@angular/core';
import {Cell} from "@antv/x6";
import {HmiComponent, HmiComponentEvent} from "../../hmi";
import {NzModalService} from "ng-zorro-antd/modal";
import {BindingSettingComponent} from "../binding-setting/binding-setting.component";

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
    @Input() cell!: Cell
    @Input() component!: HmiComponent

    constructor(private ms: NzModalService) {
    }

    edit(e: HmiComponentEvent) {
        this.ms.create({
            nzTitle: `编辑 ${e.label} 数据绑定`,
            nzContent: BindingSettingComponent
        })
        //TODO OK中，将脚本回传 至 cell.data.bindings[e.name]
    }

}
