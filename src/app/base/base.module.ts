import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ColorPickerModule } from "ngx-color-picker";
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EditTableComponent } from './edit-table/edit-table.component';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { ColorInputComponent } from './color-input/color-input.component';
import { SvgComponent } from './svg/svg.component';
@NgModule({
  declarations: [
    EditTableComponent,
    ColorInputComponent,
    SvgComponent,
  ],
  exports: [
    EditTableComponent,
    ColorInputComponent,
    SvgComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    NzCheckboxModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
  ]
})
export class BaseModule { }
