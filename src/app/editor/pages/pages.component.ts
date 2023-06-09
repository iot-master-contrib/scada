import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { HmiProject } from "../../hmi";
import { Graph } from "@antv/x6";
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { PageSettingComponent } from '../page-setting/page-setting.component';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  @Input() project!: HmiProject;
  @Input() graph!: Graph;
  @Output() onSaveProjectSettings = new EventEmitter<HmiProject>();
  index = 0
  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
  ) { }
  handleEdit(i?: number) {
    const isNew = i === undefined;
    const modal: NzModalRef = this.modal.create({
      nzTitle: isNew ? '新增页面' : '编辑页面',
      nzContent: PageSettingComponent,
      nzComponentParams: {
        row: isNew ? { name: '', content: {} } : this.project.pages[i]
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
            const value = componentInstance?.group.value;
            if (isNew) {
              this.project.pages.push({ name: value.name, content: {} });
            } else {
              this.project.pages[i].name = value.name;
            }
            this.onSaveProjectSettings.emit(this.project);
            modal.destroy()
          }
        },
      ]
    });
  }
  handleDel(index: number) {
    this.project.pages.splice(index, 1);
    this.onSaveProjectSettings.emit(this.project);
  }
}
