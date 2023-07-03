import { Component, inject, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Shape } from '@antv/x6';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { HmiComponent } from 'src/hmi/hmi';

@Component({
  selector: 'app-set-chart',
  templateUrl: './set-chart.component.html',
  styleUrls: ['./set-chart.component.scss']
})
export class SetChartComponent {
  @Input("component") component!: HmiComponent
  @ViewChild('firstStep') firstStep: any;
  @ViewChild('secondStep') secondStep: any;
  current = 0;
  echartData = [];
  echartType = '';
  readonly #modal = inject(NzModalRef);
  constructor(public viewContainerRef: ViewContainerRef,
  ) { }
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
    console.log(this.component)
    this.echartType = this.component.id.split('-')[1];
    this.echartData = this.firstStep.getData();
  }

  handleCreateGraph() {
    const echartsOption = this.secondStep.option;
    const echartsInstance = this.secondStep.myChart;
    const ele = document.getElementsByTagName("app-second-step")[0].getElementsByTagName("canvas")[0];
    const { component } = this;
    Shape.HTML.register({
      shape: component.id,
      width: 500,
      height: 400,
      effect: ['data'],
      html() {
        return ele
      },
    });
    component.registered = true;
    this.#modal.destroy({ echartsOption, echartsInstance });
  }
}
