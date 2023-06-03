import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
    @Input() open = true
    @Input() title = "标题";
}
