import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-component-edit',
  templateUrl: './component-edit.component.html',
  styleUrls: ['./component-edit.component.scss']
})
export class ComponentEditComponent {
  content = '';
  id: any = '';
  constructor(
    private rs: RequestService,
    private msg: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.rs.get(`api/component/${this.id}`).subscribe((res) => {
        const resData = res.data;
        this.content = JSON.stringify(resData, undefined, '\t');
      });
    }
  }
  goBack() {
    this.router.navigateByUrl(`admin/component`);
  }
  submit() {
    let api = "api/component/create";
    if (this.id) {
      api = `api/component/${this.id}`
    }

    let data = JSON.parse(this.content)
    this.rs.post(api, data).subscribe((res) => {
      this.msg.success('保存成功');
      this.goBack();
    });
  }
}
