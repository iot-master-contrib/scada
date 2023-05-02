import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditorRoutingModule} from './editor-routing.module';
import {EditorComponent} from "./editor.component";
import {LibraryComponent} from './library/library.component';
import {CanvasComponent} from './canvas/canvas.component';
import {PropertyComponent} from './property/property.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {
    SaveOutline,
    ExportOutline,
    UndoOutline,
    RedoOutline,
    ScissorOutline,
    CopyOutline,
    SnippetsOutline,
    DeleteOutline,
    AlignLeftOutline,
    AlignCenterOutline,
    AlignRightOutline,
    VerticalAlignTopOutline,
    VerticalAlignMiddleOutline,
    VerticalAlignBottomOutline,
    VerticalLeftOutline,
    VerticalRightOutline,
    UpOutline,
    DownOutline,
    GroupOutline,
    UngroupOutline
} from '@ant-design/icons-angular/icons';
import {CollectionComponent} from './library/collection/collection.component';
import {ComponentsModule} from "../components/components.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ColorPickerModule} from "ngx-color-picker";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        EditorComponent,
        LibraryComponent,
        CanvasComponent,
        PropertyComponent,
        ToolbarComponent,
        CollectionComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        EditorRoutingModule,
        NzIconModule.forChild([
            SaveOutline, ExportOutline, UndoOutline, RedoOutline, ScissorOutline,
            CopyOutline, SnippetsOutline, DeleteOutline, AlignLeftOutline,
            AlignCenterOutline, AlignRightOutline, VerticalAlignTopOutline,
            VerticalAlignMiddleOutline, VerticalAlignBottomOutline,
            VerticalLeftOutline, VerticalRightOutline,
            UpOutline, DownOutline, GroupOutline, UngroupOutline
        ]),
        NzDividerModule,
        NzButtonModule,
        ColorPickerModule,
        ReactiveFormsModule,
    ]
})
export class EditorModule {
}
