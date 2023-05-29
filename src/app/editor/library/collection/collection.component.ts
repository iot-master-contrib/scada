import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HmiCollection, HmiComponent, HmiDraw } from "../../../hmi";

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
    @Input() data!: HmiCollection

    @Output() onDraw = new EventEmitter<HmiDraw>()

    open = true


    onDragStart($event: DragEvent, c: HmiComponent) {
        // if (c.type != "line")
        this.onDraw.emit({ event: $event, component: c });
    }

    onClick(c: HmiComponent) {
        // if (c.type == "line")
        // this.onDraw.emit({ component: c, eventType: 'click' })
    }
}
