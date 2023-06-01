import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ColorPickerModule } from "ngx-color-picker";
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { EditTableComponent } from './edit-table/edit-table.component';
@NgModule({
  declarations: [
    SwitchInputComponent,
    EditTableComponent,
  ],
  exports: [
    SwitchInputComponent,
    EditTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    NzCheckboxModule,
    NzIconModule,
  ]
})
export class BaseModule { }
