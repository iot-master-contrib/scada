import { Component, Input } from '@angular/core';
import { Cell } from "@antv/x6";
import { HmiProperty } from 'src/app/hmi';

@Component({
  selector: 'app-switch-input',
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss']
})
export class SwitchInputComponent {
  @Input() p: any = '';
  @Input() cell!: Cell
  inputChange($event: any, p: HmiProperty) {
    console.log("property input change", p.path, $event);
    this.cell.setPropByPath(p.path, $event.target.value);
  }
  change($event: any, p: HmiProperty) {
    console.log("property change", p.path, $event)
    this.cell.setPropByPath(p.path, $event)
  }
  colorCheckChange(selected: boolean, p: HmiProperty) {
    const color = selected ? '#333' : 'none';
    this.cell.setPropByPath(p.path, color)
  }
}
