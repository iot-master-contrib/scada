import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewerComponent} from "./viewer.component";

const routes: Routes = [
    {path: ':id', component: ViewerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule { }
