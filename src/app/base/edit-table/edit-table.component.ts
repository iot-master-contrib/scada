import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormArray, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
  providers: [
    NzMessageService,
  ]
})
export class EditTableComponent implements OnInit {
  group!: any;
  row: any = {};
  constListData: any = [];

  @Input() data: any
  @Input()
  set listData(data: Array<{ title: string, type?: any, keyName: string, defaultValue?: any }>) {
    const row: any = {};
    for (let index = 0; index < data.length; index++) {
      const { keyName, defaultValue } = data[index];
      row[keyName] = defaultValue || '';
    }
    this.row = row;
    this.constListData = data;
  };
  constructor(
    private msg: NzMessageService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.group = this.fb.group({ keyName: this.fb.array([]) });
    const arr = [];
    for (const key in this.data) {
      const item = this.data[key];
      if (key != 'id') {
        arr.push({ name: key, content: item });
      }
    }
    this.writeValue(arr);
  }
  writeValue(data: any): void {
    const itemObj = JSON.parse(JSON.stringify(this.row));
    if (data && data.length) {
      data.forEach((item: any) => {
        const newGroup = this.fb.group(Object.assign(itemObj, item));
        this.aliases.push(newGroup);
      });
    }
  }

  propertyDel(i: number) {
    this.aliases.removeAt(i);
  }
  get aliases(): FormArray {
    return this.group.get('keyName') as FormArray;
  }
  propertyAdd() {
    this.aliases.insert(0, this.fb.group(this.row));
  }
  save() {
    const data = this.aliases.value;
    const arr = [];
    const dataObj: any = {};
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const { name, content } = item;
      if (name && content) {
        dataObj[name] = content;
        arr.push(item);
      } else if (!name) {
        this.msg.warning(`${content}的属性名不能为空`);
      } else if (!content) {
        this.msg.warning(`${content}的属性值不能为空`);
      }
    }
    return { arr, dataObj };
  }
}