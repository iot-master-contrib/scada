import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HmiCollection, HmiDrag} from "../../../hmi";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
    @Input() data!: HmiCollection

    @Output() onDrag = new EventEmitter<HmiDrag>()



}
