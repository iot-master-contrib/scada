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
    variableList = [];
    @Input() set content(data: any) {
        const { product } = data;
        if (product) {
            this.getVariableList(product);
        }
        this.group.patchValue(data);
    }

    constructor(private fb: FormBuilder,
        private rs: RequestService,
    ) {
        this.build()
        this.onSearch('');
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
                name: value
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
        const obj = this.optionList.find((item) => item['id'] === value) || { product_id: "" };
        this.group.patchValue({ product: obj.product_id });
        this.getVariableList(obj.product_id);
    }
    getVariableList(product_id: string) {
        this.rs.get(`/api/product/${product_id}`).subscribe(res => {
            this.variableList = res && res.data && res.data.properties || [];
        })
    }
}
