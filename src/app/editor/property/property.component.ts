import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { HmiComponent, HmiProject, HmiProperty } from "../../hmi";
import { Cell, Graph } from "@antv/x6";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EditTableComponent } from 'src/app/base/edit-table/edit-table.component';
import { RequestService } from '../../request.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import {ComponentService} from "../../component.service";

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
    providers: [
        NzMessageService
    ]
})
export class PropertyComponent {
    @Input() project!: HmiProject;

    @Output() onPageChange = new EventEmitter<number>();

    selected: any = [];

    textProperties: HmiProperty[] = [
        { name: "文本", path: "attrs/text/text", type: "text" },
        { name: "文本颜色", path: "attrs/text/fill", type: "color" },
        { name: "字号", path: "attrs/text/fontSize", type: "stroke" },
    ]

    private g!: Graph;
    get graph() { return this.g; }
    @Input() set graph(g: Graph) {
        this.g = g;

        g.on("cell:change:size", (event) => {
            if (event.cell == this.cell)
                this.formSize.patchValue(event.current as any)
        })
        g.on("cell:change:position", (event) => {
            if (event.cell == this.cell)
                this.formPosition.patchValue(event.current as any)
        })
        g.on("cell:unselected", ({ cell }) => {
            if (cell == this.cell) {
                // @ts-ignore
                this.cmp = undefined;
            }
            if (cell.shape === 'text-block') {
                const view = g.findViewByCell(cell.id);
                const ele = view?.container.querySelector('foreignObject')?.querySelector('div') as unknown as HTMLElement;
                ele && this.cell.setPropByPath('attrs/label/text', ele.innerText)
            }
        })
        g.on("selection:changed", ({ selected }) => {
            this.selected = selected;
            if (g.getSelectedCellCount() === 1) {
                this.cell = g.getSelectedCells()[0]

                if (this.cell.isNode()) {
                    const pos = this.cell.getPosition()
                    this.formPosition.patchValue(pos)
                    const size = this.cell.getSize()
                    this.formSize.patchValue(size);
                } else if (this.cell.isEdge()) {
                    const source = this.cell.getProp('source');
                    const target = this.cell.getProp('target');
                    this.formLinePosition.patchValue({ source, target });
                }

                //找到组件
                this.cmp = this.cs.Get(this.cell.shape)
            }
        })
    }

    cell!: Cell
    cmp!: HmiComponent

    formPosition!: FormGroup;
    formSize!: FormGroup;
    formLinePosition!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private modal: NzModalService,
        private viewContainerRef: ViewContainerRef,
        private cs: ComponentService,
        private rs: RequestService,
        private msg: NzMessageService
    ) {
        this.formPosition = fb.group({
            x: [0, [Validators.required]],
            y: [0, [Validators.required]],
        })
        this.formSize = fb.group({
            width: [0, [Validators.required]],
            height: [0, [Validators.required]],
        })
        this.formLinePosition = fb.group({
            source: fb.group({
                x: [0, [Validators.required]],
                y: [0, [Validators.required]],
            }),
            target: fb.group({
                x: [0, [Validators.required]],
                y: [0, [Validators.required]],
            })
        })
    }

    onPositionChange($event: Event) {
        console.log("onPositionChange", this.formPosition.value)
        if (this.cell.isNode()) {
            this.cell.setPosition(this.formPosition.value)
        }
    }
    onSizeChange($event: Event) {
        console.log("onPositionChange", this.formSize.value)
        if (this.cell.isNode()) {
            this.cell.setSize(this.formSize.value)
        }
    }
    onLinePositionChange($event: Event) {
        this.cell.setProp(this.formLinePosition.value);
    }

    handleEditData() {
        const modal: NzModalRef = this.modal.create({
            nzContent: EditTableComponent,
            nzComponentParams: {
                listData: [{
                    title: '属性名',
                    keyName: 'name'
                }, {
                    title: '属性值',
                    keyName: 'content'
                }],
                data: this.cell.data
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
                    onClick: () => {
                        const editTable = modal.getContentComponent();
                        const { dataObj, arr } = editTable.save();
                        this.cell.setData(dataObj, { overwrite: true });
                        // this.rs.post('/app/scada/api/project/create', { Pages: arr }).subscribe((res) => {
                        //     this.msg.success('保存成功');
                        // });
                        modal.destroy();
                    }
                },
            ]
        });
    }

    addPage() {

    }
}
