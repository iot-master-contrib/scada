import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    contributors: any = [
        {name: '杰神', url: 'https://github.com/zgwit', email:'jason@zgwit.com'},
        {name: 'EnTrouble', url: 'https://github.com/EnTrouble', email:'hutianqi@zgwit.cn'},
    ];

}
