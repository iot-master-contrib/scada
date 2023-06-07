import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { NzModalService } from "ng-zorro-antd/modal";
import { ParseTableQuery } from "../../base/table";
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [NzMessageService, NzModalService]
})
export class ProjectComponent {

  loading = true
  datum: any[] = []
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  query: any = {}
  checked = false;
  indeterminate = false;
  delResData: any = [];
  constructor(private router: Router,
    private rs: RequestService,
    private modal: NzModalService,
    private msg: NzMessageService
  ) { }

  reload() {
    this.datum = [];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("api/project/search", this.query).subscribe(res => {
      const { data, total } = res;
      this.datum = data || [];
      this.total = total || 0;
    }).add(() => {
      this.loading = false;
    })
  }

  delete(id: number, size?: number) {
    this.rs.get(`api/project/${id}/delete`).subscribe(res => {
      if (!size) {
        this.msg.success("删除成功");
        this.datum = this.datum.filter(d => d.id !== id);
      } else if (size) {
        this.delResData.push(res);
        if (size === this.delResData.length) {
          this.msg.success("删除成功");
          this.load();
        }
      }
    })
  }
  cancel() { }
  onQuery($event: NzTableQueryParams) {
    ParseTableQuery($event, this.query)
    this.load();
  }
  pageIndexChange(pageIndex: number) {
    console.log("pageIndex:", pageIndex)
    this.query.skip = pageIndex - 1;
  }
  pageSizeChange(pageSize: number) {
    this.query.limit = pageSize;
  }

  search($event: string) {
    this.query.keyword = {
      title: $event,
      Message: $event,
    };
    this.query.skip = 0;
    // this.load();
  }

  add() {
    this.router.navigateByUrl(`admin/project/create`);
  }
  handleEdit(id: string) {
    this.router.navigateByUrl(`admin/project/edit/` + id);
  }
}
