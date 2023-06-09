import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HmiPage, HmiProject} from "../../hmi";
import {Graph} from "@antv/x6";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
    @Input() project!: HmiProject;
    @Input() graph!: Graph;

    index = 0



}
