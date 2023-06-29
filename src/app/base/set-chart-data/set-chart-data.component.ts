import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-set-chart-data',
  templateUrl: './set-chart-data.component.html',
  styleUrls: ['./set-chart-data.component.scss']
})
export class SetChartDataComponent {
  @ViewChild('firstStep') firstStep: any;
  @ViewChild('secondStep') secondStep: any;
  current = 0;
  echartData = [];
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
    switch (this.current) {
      case 1:
        this.echartData = this.firstStep.getData();
        break;
      case 2:
        break;
      default:
        break;
    }
  }


}
