import {Component, Input} from '@angular/core';
import {Cell} from "@antv/x6";
import {HmiComponent} from "../../hmi";

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent {
    @Input() cell!: Cell
    @Input() component!: HmiComponent


}
