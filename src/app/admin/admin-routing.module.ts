import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from "./project/project.component";
import {CollectionComponent} from "./collection/collection.component";
import {CollectionEditComponent} from "./collection-edit/collection-edit.component";
import {ComponentComponent} from "./component/component.component";
import {ComponentEditComponent} from "./component-edit/component-edit.component";

const routes: Routes = [
    {path: '', pathMatch: "full", redirectTo: "project"},
    {path: 'project', component: ProjectComponent},
    {path: 'component', component: ComponentComponent},
    {path: 'component/edit/:id', component: ComponentEditComponent},
    {path: 'component/create', component: ComponentEditComponent},
    {path: 'collection', component: CollectionComponent},
    {path: 'collection/edit/:id', component: CollectionEditComponent},
    {path: 'collection/create', component: CollectionEditComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
