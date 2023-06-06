import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-component-edit',
  templateUrl: './component-edit.component.html',
  styleUrls: ['./component-edit.component.scss']
})
export class ComponentEditComponent {
  content = '';
  constructor(
    private rs: RequestService,
    private msg: NzMessageService,
    private router: Router
  ) { }
  goBack() {
    this.router.navigateByUrl(`admin/component`);
  }
  submit() {
    console.log(typeof (this.content), this.content)
    this.rs.post("api/component/create", this.content).subscribe((res) => {
      this.msg.success('保存成功');
      this.goBack();
    });
  }
}
