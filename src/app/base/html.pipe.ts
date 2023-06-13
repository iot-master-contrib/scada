import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
    name: 'html'
})
export class HtmlPipe implements PipeTransform {
    constructor(private san: DomSanitizer) {
    }

    transform(value: string, ...args: unknown[]): SafeHtml {
        return this.san.bypassSecurityTrustHtml(value)
    }

}
