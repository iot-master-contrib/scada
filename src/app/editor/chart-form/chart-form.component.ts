import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
  styleUrls: ['./chart-form.component.scss']
})
export class ChartFormComponent {
  @Input("echartsInstance") echartsInstance: any = null;
  constructor(private fb: FormBuilder) {
    console.log(this.echartsInstance);
    const fn = setInterval(() => {
      if (this.echartsInstance) {
        clearInterval(fn);
        const option = this.echartsInstance.getOption();
      }
    }, 1000)
    this.optionsForm = this.fb.group({
      title: this.fb.group({
        show: true,
        text: [''],
        textStyle: this.fb.group({
          color: ['#000'],
          fontSize: [12]
        })
      })
    });

  }
  optionsForm: FormGroup;
  onSizeChange($event: Event) {
    this.echartsInstance?.setOption(this.optionsForm.value)
  }
}
