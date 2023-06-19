import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { HmiPage } from 'src/hmi/hmi';
@Component({
  selector: 'app-page-setting',
  templateUrl: './page-setting.component.html',
  styleUrls: ['./page-setting.component.scss']
})
export class PageSettingComponent {
  group!: FormGroup;

  @Input() set row(data: HmiPage) {
    if (data) {
      this.group.patchValue(data);
    }
  }

  constructor(
    private fb: FormBuilder,
  ) {
    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      name: [obj.name || '', [Validators.required]],
      background_color: [obj.background_color],
      background_image: [obj.background_image],
    })
  }

  submit(): Promise<HmiPage> {
    return new Promise((resolve, reject) => {
      if (this.group.valid) {
        const page: HmiPage = this.group.value;
        resolve(page);
      } else {
        Object.values(this.group.controls).forEach((control) => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
            reject();
          }
        });
      }
    })
  }
}
