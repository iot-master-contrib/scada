import {Component, EventEmitter, Output} from '@angular/core';
import {HmiCollection, HmiComponent, HmiDraw} from "../../hmi";
import {COMPONENTS} from "../../components/components";


@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent {


    @Output() onDrag = new EventEmitter<HmiDraw>()
    @Output() onDrawLine = new EventEmitter<HmiComponent>()

    collections: HmiCollection[] = COMPONENTS


}
