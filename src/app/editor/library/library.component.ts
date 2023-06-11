import {Component, EventEmitter, Output} from '@angular/core';
import {HmiComponent, HmiDraw} from "../../hmi";
import {ComponentService} from "../../component.service";

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
    @Output() onDrag = new EventEmitter<HmiDraw>()
    //@Output() onDrawLine = new EventEmitter<HmiComponent>()

    constructor(
        protected cs: ComponentService,
    ) {
    }

    onDragStart($event: DragEvent, c: HmiComponent) {
        this.onDrag.emit({ event: $event, component: c });
    }

    handleClick() {

    }

    more() {

    }
}
