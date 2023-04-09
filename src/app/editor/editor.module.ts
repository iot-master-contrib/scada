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
    UpOutline,
    DownOutline,
    GroupOutline,
    UngroupOutline
} from '@ant-design/icons-angular/icons';

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
        EditorRoutingModule,
        NzIconModule.forChild([
            SaveOutline, ExportOutline, UndoOutline, RedoOutline, ScissorOutline, CopyOutline, SnippetsOutline, DeleteOutline, AlignLeftOutline, AlignCenterOutline, AlignRightOutline, VerticalAlignTopOutline, VerticalAlignMiddleOutline, VerticalAlignBottomOutline, UpOutline, DownOutline, GroupOutline, UngroupOutline
        ]),
        NzDividerModule
    ]
})
export class EditorModule {
}
