import {Component, Input} from '@angular/core';
import {HmiComponent} from "../../hmi";
import {Graph} from "@antv/x6";

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss']
})
export class PropertyComponent {
    @Input() set graph(g: Graph) {
        g.on("selection:changed", () => {
            if (g.getSelectedCellCount() === 1) {
                let cell = g.getSelectedCells()[0]
                console.log("selection:changed", cell, cell.getData())
                // cell.getData()
                //this.cmp = g.getSelectedCells()[0].getData()
                //console.log(this.cmp)
            }
        })
    }

    cmp?: HmiComponent


}
