import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewerRoutingModule} from './viewer-routing.module';
import {WindowComponent} from './window/window.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzNotificationModule} from "ng-zorro-antd/notification";
import { AuthComponent } from './auth/auth.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";


@NgModule({
    declarations: [
        WindowComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        ViewerRoutingModule,
        NzNotificationModule,
        NzModalModule,
        NzInputModule,
        FormsModule,
        NzIconModule,
        NzButtonModule,
        NzFormModule,
        ReactiveFormsModule,
    ]
})
export class ViewerModule {
}
