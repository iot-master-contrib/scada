import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HmiPage } from "../../../hmi/hmi";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
    selector: 'app-binding-setting',
    templateUrl: './binding-setting.component.html',
    styleUrls: ['./binding-setting.component.scss']
})
export class BindingSettingComponent {

    group!: FormGroup;
    isLoading: boolean = false;
    optionList = [];
    variableList: any = [];
    @Input() set content(data: any) {
        const { product, device } = data;
        if (device) {
            this.onSearch(device);
            this.getVariableList(product);
        } else {
            this.onSearch('');
        }
        this.group.patchValue(data);
    }

    constructor(private fb: FormBuilder,
        private rs: RequestService,
    ) {
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
    onSearch(value: string) {
        this.isLoading = true;
        this.rs.post('/api/device/search', {
            keyword: {
                name: value,
                id: value
            },
            limit: 20,
            skip: 0
        }).subscribe((res) => {
            this.optionList = res.data || [];
        }).add(() => {
            this.isLoading = false;
        });
    }
    handleChange(value: string) {
        this.variableList = [];
        const obj = this.optionList.find((item) => item['id'] === value) || { product_id: "" };
        this.group.patchValue({ product: obj.product_id, variable: '' });
        this.getVariableList(obj.product_id);
    }
    getVariableList(product_id: string) {
        if (product_id) {
            this.rs.get(`/api/product/${product_id}`).subscribe(res => {
                this.variableList = res && res.data && res.data.properties || [];
            })
        }
    }
}
