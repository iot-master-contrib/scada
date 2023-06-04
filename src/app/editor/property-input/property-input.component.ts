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
        //console.log("property input change", this.property.path, $event);
        this.cell.setPropByPath(this.property.path, $event.target.value);
    }

    change($event: any) {
        //console.log("property change", this.property.path, $event)
        this.cell.setPropByPath(this.property.path, $event)

        //保存历史
        let colors = this.getPresentColors()
        let index = colors.indexOf($event)
        if (index > -1) {
            colors.splice(index, 1)
        }
        colors.unshift($event)
        if (colors.length > 12) {
            colors.length = 12
        }
        this.setPresentColors(colors)
    }

    getPresentColors() {
        let str = localStorage.getItem("present-colors")
        if (str) {
            try {
                return JSON.parse(str)
            } catch (e) {
            }
        }
        return []
    }

    setPresentColors(colors: any) {
        localStorage.setItem("present-colors", JSON.stringify(colors))
    }

    clearColor() {
        this.cell.setPropByPath(this.property.path, 'none')
    }
}
