import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {ComponentComponent} from "./component/component.component";
import {ComponentEditComponent} from "./component-edit/component-edit.component";
import {PathComponent} from "./path/path.component";
import {PathEditComponent} from "./path-edit/path-edit.component";
import {ImageComponent} from "./image/image.component";
import {ImageEditComponent} from "./image-edit/image-edit.component";

const routes: Routes = [
    {path: '', pathMatch: "full", redirectTo: "project"},
    {path: 'project', component: ProjectComponent},
    {path: 'component', component: ComponentComponent},
    {path: 'component/edit/:id', component: ComponentEditComponent},
    {path: 'component/create', component: ComponentEditComponent},
    {path: 'path', component: PathComponent},
    {path: 'path/edit/:id', component: PathEditComponent},
    {path: 'path/create', component: PathEditComponent},
    {path: 'image', component: ImageComponent},
    {path: 'image/edit/:id', component: ImageEditComponent},
    {path: 'image/create', component: ImageEditComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
