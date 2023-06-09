import { Component, Input } from '@angular/core';
import { Graph } from "@antv/x6";
import { graphBgc } from 'src/app/components/configs/graph';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  @Input() graph!: Graph;
  bgcOption: any = null;
  constructor() {
    this.bgcOption = Object.assign({}, graphBgc);
  }
  colorChange(color: number) {
    this.bgcOption = Object.assign(this.bgcOption, { color });
    this.graph.drawBackground(this.bgcOption);
    this.setLocalStorage();
  }
  drawGrid() {
    this.graph.drawGrid({ type: this.bgcOption.gridType });
    this.setLocalStorage();
  }
  setLocalStorage() {
    localStorage.setItem("bgc-option", JSON.stringify(this.bgcOption))
  }
  handleSetImage(){
    console.log(222222222)
  }
}
