import { Component, Input } from '@angular/core';
import { Graph } from "@antv/x6";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  @Input() graph!: Graph;

  bgcOption: any = {};

  constructor() {
  }

  colorChange(color: number) {
    this.bgcOption = Object.assign(this.bgcOption, { color });
    this.graph.drawBackground(this.bgcOption);
  }

  handleSetImage(){
    console.log(222222222)
  }
}
