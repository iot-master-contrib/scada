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
    SliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
