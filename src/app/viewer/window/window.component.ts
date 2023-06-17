import {AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
    selector: 'app-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss']
})
export class WindowComponent {
    @ViewChild("iframe") iframe!: ElementRef;

    @Input() title = "窗口"
    @Input() width = 400
    @Input() height = 300

    safeUrl!: SafeResourceUrl;

    @Input() set url(u: any) {
        this.safeUrl = this.san.bypassSecurityTrustResourceUrl(u);
    }

    constructor(private san: DomSanitizer) {
        //this._url = san.bypassSecurityTrustResourceUrl("http://image.baidu.com")
    }

    load(event: any) {
        console.log('iframe load', event)
        const win = this.iframe.nativeElement.contentWindow
        this.title = win.document.title
        //可能没有加载完
        setTimeout(() => {
            this.title = win.document.title
        }, 500)
        setTimeout(() => {
            this.title = win.document.title
        }, 2000)

    }
}
