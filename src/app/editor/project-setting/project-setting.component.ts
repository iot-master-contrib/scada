import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HmiProject } from "../../hmi";

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent {

  @Input() set project(obj: HmiProject) {
    if (obj) {
      this.setData(obj);
    }
  };

  group!: FormGroup;
  constructor(private fb: FormBuilder,) {
    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      name: [obj.name || '', [Validators.required]],
      desc: [obj.desc || '', []],
      width: [obj.width || '', []],
      height: [obj.height || '', []],
    })
  }

  setData(resData: any) {
    const odata = this.group.value;
    for (const key in odata) {
      odata[key] = resData[key];
    }
    this.group.setValue(odata);
  }
}
