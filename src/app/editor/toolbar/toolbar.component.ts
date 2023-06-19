import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { Graph, Node } from "@antv/x6";
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { HmiProject } from "../../../hmi/hmi";
import { ProjectSettingComponent } from '../project-setting/project-setting.component';
import { ComponentService } from "../../component.service";
import { AboutComponent } from "../about/about.component";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    providers: [NzMessageService, NzModalService]
})
export class ToolbarComponent {
    @Input() project!: HmiProject;
    // 1200X340
    @Input() graph!: Graph;

    @Output() onSave = new EventEmitter()

    @Input() scale = 1
    @Output() scaleChange = new EventEmitter<number>()

    constructor(
        private cs: ComponentService,
        private modal: NzModalService,
        private msg: NzMessageService,
        private viewContainerRef: ViewContainerRef,
    ) { }
    handleSave() {
        this.onSave.emit();
        //console.log("save", this.graph.toJSON())
    }

    handleExport(type: string) {
        console.log(this.graph);
        switch (type) {
            case 'SVG':
                this.graph.exportSVG();
                break;
            case 'PNG':
                this.graph.exportPNG();
                break;
            case 'JPEG':
                // 有点问题
                this.graph.exportJPEG();
                break;
            case 'file':
                this.savefiles(this.graph.toJSON(), Date.now() + '');
                break;
        }
    }

    handleUndo() {
        this.graph.undo()
    }

    handleRedo() {
        this.graph.redo()
    }

    handleCut() {
        this.graph.getSelectedCells().forEach(c => c.removeTools())
        this.graph.cut(this.graph.getSelectedCells(), { deep: true })
    }

    handleCopy() {
        this.graph.getSelectedCells().forEach(c => c.removeTools())
        this.graph.copy(this.graph.getSelectedCells(), { deep: true })
    }

    handlePaste() {
        this.graph.paste()
    }

    handleDelete() {
        this.graph.getSelectedCells().forEach(cell => cell.remove())
    }

    handleAlignLeft() {
        let left: any = undefined
        this.graph.getSelectedCells().forEach(cell => {
            if (!cell.isNode()) return
            let node = cell as Node
            let pos = node.position()
            if (left === undefined) {
                left = pos.x
            } else {
                pos.x = left
                node.setPosition(pos)
            }
        })
    }

    handleAlignCenter() {
        let center: any = undefined
        this.graph.getSelectedCells().forEach(cell => {
            if (!cell.isNode()) return
            let node = cell as Node
            let pos = node.position()
            let size = node.size()
            if (center === undefined) {
                center = pos.x + size.width * 0.5
            } else {
                pos.x = center - size.width * 0.5
                node.setPosition(pos)
            }
        })
    }

    handleAlignRight() {
        let right: any = undefined
        this.graph.getSelectedCells().forEach(cell => {
            if (!cell.isNode()) return
            let node = cell as Node
            let pos = node.position()
            let size = node.size()
            if (right === undefined) {
                right = pos.x + size.width
            } else {
                pos.x = right - size.width
                node.setPosition(pos)
            }
        })
    }

    handleValignTop() {
        let top: any = undefined
        this.graph.getSelectedCells().forEach(cell => {
            if (!cell.isNode()) return
            let node = cell as Node
            let pos = node.position()
            if (top === undefined) {
                top = pos.y
            } else {
                pos.y = top
                node.setPosition(pos)
            }
        })
    }

    handleValignMiddle() {
        let middle: any = undefined
        this.graph.getSelectedCells().forEach(cell => {
            if (!cell.isNode()) return
            let node = cell as Node
            let pos = node.position()
            let size = node.size()
            if (middle === undefined) {
                middle = pos.y + size.height * 0.5
            } else {
                pos.y = middle - size.height * 0.5
                node.setPosition(pos)
            }
        })
    }

    handleValignBottom() {
        let bottom: any = undefined
        this.graph.getSelectedCells().forEach(cell => {
            if (!cell.isNode()) return
            let node = cell as Node
            let pos = node.position()
            let size = node.size()
            if (bottom === undefined) {
                bottom = pos.y + size.height
            } else {
                pos.y = bottom - size.height
                node.setPosition(pos)
            }
        })
    }

    handleMoveTop() {
        this.graph.getSelectedCells().forEach((cell) => {
            cell.toFront();
        })
    }

    handleMoveUp() {
        const cell = this.graph.getSelectedCells()[0];
        cell.setZIndex(Number(cell.getZIndex() || 0) + 1);
    }

    handleMoveDown() {
        const cell = this.graph.getSelectedCells()[0];
        cell.setZIndex(Number(cell.getZIndex() || 0) - 1);
    }

    handleMoveBottom() {
        this.graph.getSelectedCells().forEach((cell) => {
            cell.toBack();
        })
    }

    handleGroup() {
        let boxes = this.graph.getSelectedCells().map(n => n.getBBox())
        //let zIndex = this.graph.getSelectedCells().reduce((p,n) => p.zIndex < n.zIndex ? p.zIndex : n.zIndex)
        let meta = {
            x: boxes.reduce((p, n) => p.x < n.x ? p : n).x - 10,
            y: boxes.reduce((p, n) => p.y < n.y ? p : n).y - 10,
            right: boxes.reduce((p, n) => p.right > n.right ? p : n).right + 10,
            bottom: boxes.reduce((p, n) => p.bottom > n.bottom ? p : n).bottom + 10,
        }
        console.log("group", meta)

        this.cs.Get("group")
        let parent = this.graph.addNode({
            shape: "group",
            x: meta.x,
            y: meta.y,
            width: meta.right - meta.x,
            height: meta.bottom - meta.y,
        })
        //parent.setVisible(false)

        //this.graph.getSelectedCells().forEach(cell => cell.setParent(parent))
        this.graph.getSelectedCells().forEach(cell => {
            //if (cell.shape == "group" || cell.getChildCount() > 0)
            // @ts-ignore
            cell.setZIndex(parent.zIndex + cell.zIndex)
            parent.addChild(cell)
        })
    }

    handleUngroup() {
        this.graph.getSelectedCells().forEach(cell => {
            //if (cell.hasParent()) return;
            if (cell.shape == "group") {
                cell.getChildren()?.forEach(c => {
                    c.setParent(null)
                    //cell.removeChild(c)
                    //cell.eachChild()
                })
                cell.setChildren(null);
                cell.remove() //TODO 会误删除
            }
        })
    }


    isGroup(): boolean {
        if (this.graph.getSelectedCellCount() !== 1) return false;
        let current = this.graph.getSelectedCells()[0];
        //if (!current) return false;
        return current.getChildCount() > 0;
    }

    showGrid = JSON.parse(localStorage.getItem("show_grid") || 'true');

    handleGrid() {
        if (this.showGrid) this.graph.hideGrid()
        else this.graph.showGrid()
        this.showGrid = !this.showGrid
        localStorage.setItem('show_grid', JSON.stringify(this.showGrid));
    }

    settingProject() {
        const modal: NzModalRef = this.modal.create({
            nzTitle: '编辑工程信息',
            nzContent: ProjectSettingComponent,
            nzComponentParams: {
                project: this.project
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
                        const value = componentInstance!.group.value
                        Object.assign(this.project, value)
                        console.log("project setting", value)
                        //this.graph.resize(value.width, value.height)
                        //this.onSaveProjectSettings.emit(value);
                        modal.destroy()
                    }
                },
            ]
        });


    }

    savefiles(data: any, name: string) {
        const urlObject = window.URL || window.webkitURL || window;
        const export_blob = new Blob([JSON.stringify(data)]);
        const save_link = document.createElement("a");
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = name;
        save_link.click();
    }

    handleScale($event: number) {
        //console.log("handleScale", $event)
        this.scaleChange.emit($event)
        this.graph.zoomTo($event)
        //this.graph.resize()
    }

    about() {
        this.modal.create({
            nzTitle: '关于',
            nzContent: AboutComponent,
            nzFooter: null,
        })
    }
}
