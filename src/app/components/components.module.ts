import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { ProgressComponent } from './progress/progress.component';
import { SwitchComponent } from './switch/switch.component';
import { TableComponent } from './table/table.component';
import { TimeComponent } from './time/time.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartGaugeComponent } from './chart-gauge/chart-gauge.component';
import { SliderComponent } from './slider/slider.component';
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzTableModule } from "ng-zorro-antd/table";



@NgModule({
  declarations: [
    InputComponent,
    TextComponent,
    ButtonComponent,
    ProgressComponent,
    SwitchComponent,
    TableComponent,
    TimeComponent,
    ChartBarComponent,
    ChartLineComponent,
    ChartGaugeComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    NzProgressModule,
    NzButtonModule,
    NzInputModule,
    NzSliderModule,
    NzSwitchModule,
    NzTableModule
  ]
})
export class ComponentsModule { }
