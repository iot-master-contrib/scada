import {Component, ElementRef, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-html',
    templateUrl: './html.component.html',
    styleUrls: ['./html.component.scss']
})
export class HtmlComponent {


    @Input() set content(s: string) {
        this.ref.nativeElement.innerHTML = this.san.bypassSecurityTrustHtml(s)
    }

    constructor(private ref: ElementRef, private san: DomSanitizer) {
    }

}
