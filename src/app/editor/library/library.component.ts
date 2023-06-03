import { Component, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { HmiCollection, HmiComponent, HmiDraw } from "../../hmi";
import { COMPONENTS } from "../../components/components";
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
    @Output() onDrag = new EventEmitter<HmiDraw>()
    @Output() onDrawLine = new EventEmitter<HmiComponent>()

    collections: HmiCollection[] = COMPONENTS
    constructor(
        private modal: NzModalService,
        private viewContainerRef: ViewContainerRef
    ) { }
    handleClick() {
        // const modal = this.modal.create<SetLeftPanelDataComponent>({
        //     nzTitle: '形状',
        //     nzContent: SetLeftPanelDataComponent,
        //     nzViewContainerRef: this.viewContainerRef,
        //     nzComponentParams: {},
        //     nzData: {
        //         favoriteLibrary: 'angular',
        //         favoriteFramework: 'angular'
        //     },
        //     nzFooter: [
        //         {
        //             label: '取消',
        //             onClick: () => {
        //                 modal.destroy();
        //             }
        //         },
        //         {
        //             label: '应用',
        //             type: 'primary',
        //             onClick: componentInstance => {
        //             }
        //         }
        //     ]
        // });
    }

    more() {

    }
}
