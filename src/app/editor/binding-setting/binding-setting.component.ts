import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HmiPage} from "../../../hmi/hmi";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
    selector: 'app-binding-setting',
    templateUrl: './binding-setting.component.html',
    styleUrls: ['./binding-setting.component.scss']
})
export class BindingSettingComponent {

    group!: FormGroup;

    @Input() set content(data: any) {
        this.group.patchValue(data);
    }

    constructor(private fb: FormBuilder) {
        this.build()
    }

    build(obj?: any) {
        obj = obj || {}
        this.group = this.fb.group({
            product: [obj.product || '', [Validators.required]],
            device: [obj.device || '', [Validators.required]],
            variable: [obj.variable || '', [Validators.required]],
        })
    }
}
