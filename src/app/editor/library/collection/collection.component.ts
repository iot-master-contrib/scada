import {Component, Input} from '@angular/core';
import {HmiCollection} from "../../../hmi";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
    @Input() data!: HmiCollection




}
