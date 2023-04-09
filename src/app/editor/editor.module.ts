import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditorRoutingModule} from './editor-routing.module';
import {EditorComponent} from "./editor.component";
import { LibraryComponent } from './library/library.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PropertyComponent } from './property/property.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
    declarations: [
        EditorComponent,
        LibraryComponent,
        CanvasComponent,
        PropertyComponent,
        ToolbarComponent,
    ],
    imports: [
        CommonModule,
        EditorRoutingModule
    ]
})
export class EditorModule {
}
