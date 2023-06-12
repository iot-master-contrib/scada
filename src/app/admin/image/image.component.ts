import {Component, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {NzModalService} from "ng-zorro-antd/modal";
import {ParseTableQuery} from "../../base/table";

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent {

    loading = true;
    datum: any[] = [];
    total = 1;
    pageSize = 20;
    pageIndex = 1;
    query: any = {};


    constructor(
        private router: Router,
        private rs: RequestService,
        private msg: NzMessageService
    ) {
        //this.load();
    }

    reload() {
        this.datum = [];
        this.load();
    }

    load() {
        this.loading = true;
        this.rs
            .post('api/image/search', this.query)
            .subscribe((res) => {
                this.datum = res.data || [];
                this.datum.filter(
                    (item) =>
                        (item.disabled =
                            item.disabled === undefined ? false : item.disabled)
                );
                this.total = res.total;
            })
            .add(() => {
                this.loading = false;
            });
    }

    create() {
        let path = '/admin/image/create';
        this.router.navigateByUrl(path);
    }

    delete(id: number) {
        this.rs.get(`api/image/${id}/delete`).subscribe((res) => {
            this.msg.success('删除成功');
            this.datum = this.datum.filter((d) => d.id !== id);
        });
    }

    onQuery($event: NzTableQueryParams) {
        ParseTableQuery($event, this.query);
        this.load();
    }

    pageIndexChange(pageIndex: number) {
        this.query.skip = pageIndex - 1;
    }

    pageSizeChange(pageSize: number) {
        this.query.limit = pageSize;
    }

    search($event: string) {
        this.query.keyword = {
            name: $event,
        };
        this.query.skip = 0;
        this.load();
    }

    open(id: any) {
        const path = `/admin/image/detail/${id}`;
        this.router.navigateByUrl(path);
    }

    handleEdit(id?: string) {
        this.router.navigateByUrl("/admin/image/edit/" + id)
    }

    handleCreate() {
        this.router.navigateByUrl("/admin/image/create")
    }
}
