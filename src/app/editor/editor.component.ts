import {Component, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HmiComponent, HmiDraw} from "../hmi";
import {CanvasComponent} from "./canvas/canvas.component";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
    @ViewChild("canvas") canvas!: CanvasComponent

    constructor(private title: Title) {
        title.setTitle("组态编辑器")
    }

    onDrag($event: HmiDraw) {
        this.canvas.Draw($event)
    }
}
