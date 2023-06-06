import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ProjectComponent } from './project/project.component';
import { CollectionComponent } from './collection/collection.component';
import { ComponentComponent } from './component/component.component';
import { ComponentEditComponent } from './component-edit/component-edit.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { BaseModule } from '../base/base.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
@NgModule({
  declarations: [
    ProjectComponent,
    CollectionComponent,
    ComponentComponent,
    ComponentEditComponent,
    CollectionEditComponent
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
    CodemirrorModule
  ]
})
export class AdminModule { }
