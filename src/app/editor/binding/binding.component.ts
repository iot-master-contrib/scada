import {Component, Input} from '@angular/core';
import {Cell} from "@antv/x6";
import {HmiComponent} from "../../hmi";

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
    @Input() cell!: Cell
    @Input() component!: HmiComponent


}
