import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'view', loadChildren: ()=>import('./viewer/viewer.module').then(m => m.ViewerModule)},
    {path: 'edit', loadChildren: ()=>import('./editor/editor.module').then(m => m.EditorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
