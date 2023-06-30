import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewerComponent } from './viewer/viewer.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from "ng-zorro-antd/notification";
import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { DynamicComponentDirective } from './dynamic-component.directive';

registerLocaleData(zh);

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: window.location.hostname,
    port: parseInt(window.location.port),
    path: '/mqtt',
};

@NgModule({
    declarations: [
        AppComponent,
        ViewerComponent,
        DynamicComponentDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/app/scada/' },
        { provide: NZ_I18N, useValue: zh_CN },
        { provide: NzMessageService },
        NzNotificationService,
        //ComponentService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
