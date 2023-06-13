
import { Component, Input, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-svg',
  template: `<span [innerHTML]="svgIcon"></span>`,
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  @Input()
  public name?: string;
  public svgIcon: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  public ngOnInit(): void {
    this.httpClient
      .get(`/app/scada/assets/electric/electric1.svg`, { responseType: 'text' })
      .subscribe(value => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }
}