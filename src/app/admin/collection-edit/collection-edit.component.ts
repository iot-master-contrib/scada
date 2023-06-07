import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.scss']
})
export class CollectionEditComponent {
  group!: FormGroup;
  // id: any = 0
  @Input() id: string = '';

  constructor(
    private fb: FormBuilder,
    private rs: RequestService,
    private msg: NzMessageService) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.rs.get(`api/collection/${this.id}`).subscribe(res => {
        //let data = res.data;
        this.build(res.data)
      })
    }
    this.build()
  }

  build(obj?: any) {
    obj = obj || {}
    this.group = this.fb.group({
      id: [obj.id || '', []],
      name: [obj.name || '', [Validators.required]],
      desc: [obj.desc || '', []],
    })
  }

  submit() {
    return new Promise((resolve, reject) => {
      if (this.group.valid) {
        let url = this.id ? `api/collection/${this.id}` : `api/collection/create`
        this.rs.post(url, this.group.value).subscribe(res => {
          this.msg.success("保存成功");
          resolve(true);
        })
      } else {
        Object.values(this.group.controls).forEach(control => {
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
