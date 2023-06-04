import {Component, Input} from '@angular/core';
import {Cell} from "@antv/x6";
import {HmiProperty} from 'src/app/hmi';

@Component({
    selector: 'app-property-input',
    templateUrl: './property-input.component.html',
    styleUrls: ['./property-input.component.scss']
})
export class PropertyInputComponent {
    @Input() property!: HmiProperty;
    @Input() cell!: Cell

    inputChange($event: any) {
        console.log("property input change", this.property.path, $event);
        this.cell.setPropByPath(this.property.path, $event.target.value);
    }

    change($event: any) {
        console.log("property change", this.property.path, $event)
        this.cell.setPropByPath(this.property.path, $event)
    }

    colorCheckChange(selected: boolean) {
        const color = selected ? '#333' : 'none';
        this.cell.setPropByPath(this.property.path, color)
    }

    clearColor() {
        this.cell.setPropByPath(this.property.path, 'none')
    }
}
