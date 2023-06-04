import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', pathMatch: "full", redirectTo: "admin"},
    {path: 'admin', loadChildren: ()=>import('./admin/admin.module').then(m => m.AdminModule)},
    {path: 'edit', loadChildren: ()=>import('./editor/editor.module').then(m => m.EditorModule)},
    {path: 'view', loadChildren: ()=>import('./viewer/viewer.module').then(m => m.ViewerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
