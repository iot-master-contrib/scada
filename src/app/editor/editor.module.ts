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
import {NzModalModule} from 'ng-zorro-antd/modal';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {SetDataComponent} from './set-data/set-data.component';
import {BaseModule} from '../base/base.module';
import {NzSelectModule} from "ng-zorro-antd/select";
import {CollapseComponent} from './collapse/collapse.component';
import {PropertyInputComponent} from "./property-input/property-input.component";
import {NzMessageService} from 'ng-zorro-antd/message';
import {PagesComponent} from './pages/pages.component';
import {PageSettingComponent} from './page-setting/page-setting.component';
import {ProjectSettingComponent} from './project-setting/project-setting.component';
import {BackgroundComponent} from './background/background.component';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {ComponentService} from "../component.service";

@NgModule({
    declarations: [
        EditorComponent,
        LibraryComponent,
        CanvasComponent,
        PropertyComponent,
        PropertyInputComponent,
        ToolbarComponent,
        CollectionComponent,
        SetDataComponent,
        CollapseComponent,
        PagesComponent,
        PageSettingComponent,
        ProjectSettingComponent,
        BackgroundComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
        NzFormModule,
        NzInputModule,
        NzModalModule,
        NzLayoutModule,
        NzSpaceModule,
        NzTabsModule,
        NzCheckboxModule,
        BaseModule,
        NzSelectModule,
        NzInputNumberModule,
    ],
    providers: [
        {provide: NzMessageService,},
        ComponentService,
    ]
})
export class EditorModule {
}
