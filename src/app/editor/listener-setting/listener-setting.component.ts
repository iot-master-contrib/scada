import { Component } from '@angular/core';
@Component({
  selector: 'app-listener-setting',
  templateUrl: './listener-setting.component.html',
  styleUrls: ['./listener-setting.component.scss']
})
export class ListenerSettingComponent {
  content = '';
  codeMirrorOptions: any = {
    theme: 'material',
    mode: 'javascript',
    lineWrapping: true,
    foldGutter: true,
    autoCloseBrackets: true,
    autoFocus: true,
    matchBrackets: true,
    lint: true
  };
}
