import {Component, Input} from '@angular/core';
import {HmiComponent, HmiProperty} from "../../hmi";
import {Cell, Graph} from "@antv/x6";
import {COMPONENTS} from "../../components/components";

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss']
})
export class PropertyComponent {

    @Input() set graph(g: Graph) {
        g.on("selection:changed", () => {
            if (g.getSelectedCellCount() === 1) {
                this.cell = g.getSelectedCells()[0]
                console.log("selection:changed", this.cell)
                // cell.getData()
                //this.cmp = g.getSelectedCells()[0].getData()
                //console.log(this.cmp)

                //找到组件 TODO 应该索引
                COMPONENTS.find(g => g.components.find(c => {
                    if (c.id === this.cell.shape) {
                        this.cmp = c
                        return true
                    }
                    return false
                }))
            }
        })
    }

    cell!: Cell
    cmp!: HmiComponent

    inputChange($event: any, p: HmiProperty) {
        console.log("property input change", p.path, $event)
        this.cell.setAttrByPath(p.path, $event.target.value)
    }

    change($event: any, p: HmiProperty) {
        console.log("property change", p.path, $event)
        this.cell.setAttrByPath(p.path, $event)
    }
}
