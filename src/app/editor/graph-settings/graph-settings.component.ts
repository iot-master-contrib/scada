import { Component } from '@angular/core';
import { graphBgc } from 'src/app/components/configs/graph';
@Component({
  selector: 'app-graph-settings',
  templateUrl: './graph-settings.component.html',
  styleUrls: ['./graph-settings.component.scss']
})
export class GraphSettingsComponent {
  properties = [
    {}
  ]
  bgcOption = {
    color: graphBgc.color,
    gridType: graphBgc.gridType
  }
}
