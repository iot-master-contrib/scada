import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewerRoutingModule} from './viewer-routing.module';
import {WindowComponent} from './window/window.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzNotificationModule} from "ng-zorro-antd/notification";


@NgModule({
    declarations: [
        WindowComponent
    ],
    imports: [
        CommonModule,
        ViewerRoutingModule,
        NzNotificationModule,
        NzModalModule,
    ]
})
export class ViewerModule {
}
