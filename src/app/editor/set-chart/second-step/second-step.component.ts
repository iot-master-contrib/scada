import { Component, Input } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent {
  @Input('echartType') echartType: any;
  @Input('echartData') echartData!: any;
  option: any;
  myChart: any;
  isSpinning: boolean = true;
  constructor() {
    const fn = setInterval(() => {
      const mainEle: any = document.getElementById('main');
      if (mainEle) {
        clearInterval(fn);
        const myChart = echarts.init(mainEle);
        this.myChart = myChart;
        this.setOptions();
      }
    }, 1000);
  }
  setOptions() {
    const tableData = this.echartData;
    console.log(this.echartType)
    const xData: any = [];
    const series = [];
    switch (this.echartType) {
      case 'bar':
      case 'line':
        const seriesObj: any = {};
        for (let index = 0; index < tableData.length; index++) {
          const item = tableData[index];
          for (const key in item) {
            if (key === 'x') {
              xData.push(item.x);
            } else if (!seriesObj[key]) {
              seriesObj[key] = [item[key]];
            } else {
              seriesObj[key].push(item[key]);
            }
          }
        }
        for (const key in seriesObj) {
          series.push({
            type: this.echartType,
            data: seriesObj[key]
          });
        };
        this.option = {
          xAxis: {
            data: xData
          },
          yAxis: {},
          series
        };
        break;
      case 'pie':
        const seriesData = [];
        for (let index = 0; index < tableData.length; index++) {
          const item = tableData[index];
          seriesData.push({ name: item.x, value: item.y1 });
        }
        this.option = {
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [{
            type: 'pie',
            radius: '50%',
            data: seriesData
          }]
        };
        break;
      default:
        break;
    }

    this.isSpinning = false;

    this.myChart.setOption(this.option);
  }
}
