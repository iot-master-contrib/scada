import { Component, Input } from '@angular/core';
import { Cell } from "@antv/x6";

@Component({
  selector: 'app-set-data',
  templateUrl: './set-data.component.html',
  styleUrls: ['./set-data.component.scss']
})
export class SetDataComponent {
  @Input() cell!: Cell
}
