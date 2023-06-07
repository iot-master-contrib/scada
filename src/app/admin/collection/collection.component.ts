import { Component, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { RequestService } from "../../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { ParseTableQuery } from "../../base/table";
import { CollectionEditComponent } from '../collection-edit/collection-edit.component';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  providers: [NzMessageService, NzModalService]
})
export class CollectionComponent {
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
    private msg: NzMessageService,
    private viewContainerRef: ViewContainerRef,
  ) { }

  reload() {
    this.datum = [];
    this.load()
  }

  load() {
    this.loading = true
    this.rs.post("api/collection/search", this.query).subscribe(res => {
      const { data, total } = res;
      this.datum = data || [];
      this.total = total || 0;
    }).add(() => {
      this.loading = false;
    })
  }

  delete(id: number, size?: number) {
    this.rs.get(`api/collection/${id}/delete`).subscribe(res => {
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
  cancel(){}
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
  handleEdit(id?: string) {
    const modal: NzModalRef = this.modal.create({
      nzTitle: id ? '编辑' : '新增',
      nzContent: CollectionEditComponent,
      nzComponentParams: {
        id
      },
      nzViewContainerRef: this.viewContainerRef,
      nzFooter: [
        {
          label: '取消',
          onClick: () => modal.destroy()
        },
        {
          label: '保存',
          type: 'primary',
          onClick: componentInstance => {
            componentInstance!.submit().then(() => {
              modal.destroy();
              this.load();
            }, () => { })
          }
        },
      ]
    });
  }
}
