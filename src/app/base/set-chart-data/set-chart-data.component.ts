import { Component } from '@angular/core';

@Component({
  selector: 'app-set-chart-data',
  templateUrl: './set-chart-data.component.html',
  styleUrls: ['./set-chart-data.component.scss']
})
export class SetChartDataComponent {
  current = 0;
  form = {
    radioValue: 'static',
    rows: 5,
    cols: 3,
  }
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

}
