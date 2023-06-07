import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminRoutingModule} from './admin-routing.module';
import {ProjectComponent} from './project/project.component';
import {CollectionComponent} from './collection/collection.component';
import {ComponentComponent} from './component/component.component';
import {ComponentEditComponent} from './component-edit/component-edit.component';
import {CollectionEditComponent} from './collection-edit/collection-edit.component';
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

@NgModule({
    declarations: [
        ProjectComponent,
        CollectionComponent,
        CollectionEditComponent,
        ComponentComponent,
        ComponentEditComponent,
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
        NzPopconfirmModule
    ]
})
export class AdminModule {
}
