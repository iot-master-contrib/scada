import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProjectComponent } from './project/project.component';
import { CollectionComponent } from './collection/collection.component';
import { ComponentComponent } from './component/component.component';
import { ComponentEditComponent } from './component-edit/component-edit.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';


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
    AdminRoutingModule
  ]
})
export class AdminModule { }
