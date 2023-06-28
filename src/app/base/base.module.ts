import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ColorPickerModule } from "ngx-color-picker";
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EditTableComponent } from './edit-table/edit-table.component';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { ColorInputComponent } from './color-input/color-input.component';
import { HtmlPipe } from './html.pipe';
import { AttachSelectComponent } from './attach-select/attach-select.component';
import { CommonHeaderComponent } from "./common-header/common-header.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { SetChartDataComponent } from './set-chart-data/set-chart-data.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@NgModule({
    declarations: [
        SearchBoxComponent,
        EditTableComponent,
        ColorInputComponent,
        HtmlPipe,
        AttachSelectComponent,
        CommonHeaderComponent,
        SetChartDataComponent,

    ],
    exports: [
        SearchBoxComponent,
        EditTableComponent,
        ColorInputComponent,
        HtmlPipe,
        AttachSelectComponent,
        CommonHeaderComponent,
        SetChartDataComponent,
    ],
    providers: [HtmlPipe],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NzCheckboxModule,
        NzIconModule,
        NzInputModule,
        NzButtonModule,
        NzLayoutModule,
        NzPageHeaderModule,
        NzSpaceModule,
        NzUploadModule,
        NzRadioModule,
        NzStepsModule
    ]
})
export class BaseModule {
}
