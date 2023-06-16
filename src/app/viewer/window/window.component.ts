import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
    selector: 'app-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss']
})
export class WindowComponent {
    safeUrl!: SafeResourceUrl;

    @Input() width = 400
    @Input() height = 300

    @Input() set url(u: any) {
        this.safeUrl = this.san.bypassSecurityTrustResourceUrl(u);
    }

    constructor(private san: DomSanitizer) {
        //this._url = san.bypassSecurityTrustResourceUrl("http://image.baidu.com")
    }
}
