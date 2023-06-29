import { Component, Input } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent {
  chart: any

  constructor(private rs: RequestService) {
    const fn = setInterval(() => {
      const mainEle: any = document.getElementById('main');
      if (mainEle) {
        clearInterval(fn);
        const myChart = echarts.init(mainEle);

        // 指定图表的配置项和数据
        const option = {
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }, 1000);
  }
}
