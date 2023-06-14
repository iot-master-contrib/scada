import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-listener-setting',
    templateUrl: './listener-setting.component.html',
    styleUrls: ['./listener-setting.component.scss']
})
export class ListenerSettingComponent {
    @Input() content = '';

    codeMirrorOptions: any = {
        theme: 'material',
        mode: 'javascript',
        //lineNumbers: true, //有问题
        lineWrapping: true,
        foldGutter: true,
        autoCloseBrackets: true,
        autoFocus: true,
        matchBrackets: true,
        lint: true
    };
}
