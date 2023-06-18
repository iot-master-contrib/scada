import { Component, Input, OnInit } from '@angular/core';
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
      this.group.setValue({ name: data.name });
    }
  }

  constructor(
    private fb: FormBuilder,
    private rs: RequestService,
    private msg: NzMessageService) {
    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      name: [obj.name || '', [Validators.required]],
    })
  }
}
