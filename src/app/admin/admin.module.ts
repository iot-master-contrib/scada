import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminRoutingModule} from './admin-routing.module';
import {ProjectComponent} from './project/project.component';
import {ComponentComponent} from './component/component.component';
import {ComponentEditComponent} from './component-edit/component-edit.component';
import {BaseModule} from '../base/base.module';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import { PathComponent } from './path/path.component';
import { ImageComponent } from './image/image.component';
import { PathEditComponent } from './path-edit/path-edit.component';
import { ImageEditComponent } from './image-edit/image-edit.component';
import {NzTagModule} from "ng-zorro-antd/tag";

@NgModule({
    declarations: [
        ProjectComponent,
        ComponentComponent,
        ComponentEditComponent,
        PathComponent,
        PathEditComponent,
        ImageComponent,
        ImageEditComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        BaseModule,
        NzSpaceModule,
        NzIconModule,
        NzTableModule,
        NzDividerModule,
        NzButtonModule,
        FormsModule,
        CodemirrorModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzPopconfirmModule,
        NzTagModule
    ]
})
export class AdminModule {
}
