import {Component, EventEmitter, Input, Output, ViewContainerRef} from '@angular/core';
import {HmiProject} from "../../hmi";
import {Graph} from "@antv/x6";
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {PageSettingComponent} from '../page-setting/page-setting.component';
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
    @Input() project!: HmiProject;
    @Input() graph!: Graph;


    @Output() onPageChange = new EventEmitter<number>();

    index = 0


    constructor(
        private modal: NzModalService,
        private ms: NzMessageService,
        private viewContainerRef: ViewContainerRef,
    ) {
    }


    public handleEdit(i?: number) {
        const isNew = i === undefined;
        const modal: NzModalRef = this.modal.create({
            nzTitle: isNew ? '新增页面' : '编辑页面',
            nzContent: PageSettingComponent,
            nzComponentParams: {
                row: isNew ? {name: '', content: {}} : this.project.pages[i]
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
                            this.project.pages.push({name: value.name, content: {}});
                        } else {
                            this.project.pages[i].name = value.name;
                        }
                        this.onPageChange.emit(0);
                        modal.destroy()
                    }
                },
            ]
        });
    }

    handleDel(index: number) {
        if (this.project.pages.length == 1) {
            this.ms.error("再删就没有了")
            return
        }
        this.project.pages.splice(index, 1);
        if (this.index == index) {
            if (index >= this.project.pages.length)
                this.index = index - 1;
            this.onPageChange.emit(this.index);
        }
    }

    open(index: number) {
        this.index = index
        this.onPageChange.emit(index)
    }

    handleCopy(i: number) {


    }
}
