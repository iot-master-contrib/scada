import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
  providers: [
    NzMessageService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditTableComponent),
      multi: true
    }
  ]
})
export class EditTableComponent implements OnInit, ControlValueAccessor {
  group!: any;
  row: any = {};
  constListData: any = [];
  onChanged: any = () => { }
  onTouched: any = () => { }

  @Input() data: any = {};
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

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  change() {
    const data = this.aliases.controls.map((item) => item.value);
    this.onChanged(data);
  }
  propertyDel(i: number) {
    this.aliases.removeAt(i);
    this.change();
  }
  get aliases(): FormArray {
    return this.group.get('keyName') as FormArray;
  }
  propertyAdd() {
    this.aliases.insert(0, this.fb.group(this.row));
  }
}