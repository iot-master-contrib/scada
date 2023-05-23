import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Graph, Node} from "@antv/x6";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    @Input() graph!: Graph;

    handleSave() {
        console.log("save", this.graph.toJSON())
    }

    handleExport() {
        this.graph.exportJPEG()
    }

    handleUndo() {
        this.graph.undo()
    }

    handleRedo() {
        this.graph.redo()
    }

    handleCut() {
        this.graph.getSelectedCells().forEach(c=>c.removeTools())
        this.graph.cut(this.graph.getSelectedCells())
    }

    handleCopy() {
        this.graph.getSelectedCells().forEach(c=>c.removeTools())
        this.graph.copy(this.graph.getSelectedCells())
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
        //this.graph.getSelectedCells().forEach(cell=>cell.)
    }

    handleMoveUp() {
    }

    handleMoveDown() {
    }

    handleMoveBottom() {
    }

    handleGroup() {
        let boxes = this.graph.getSelectedCells().map(n => n.getBBox())
        let meta = {
            x: boxes.reduce((p, n) => p.x < n.x ? p : n).x,
            y: boxes.reduce((p, n) => p.y < n.y ? p : n).y,
            right: boxes.reduce((p, n) => p.right > n.right ? p : n).right,
            bottom: boxes.reduce((p, n) => p.bottom > n.bottom ? p : n).bottom,
        }
        console.log("group", meta)
        let parent = this.graph.addNode({
            shape: "rect",
            x: meta.x, y: meta.y,
            width: meta.right - meta.x,
            height: meta.bottom - meta.y,
            attrs: {
                //TODO 透明 zindex处理
                body: {
                    fill: "none",
                    stroke: "none"
                }
            }
        })
        console.log("parent", parent)
        //this.graph.getSelectedCells().forEach(cell => cell.setParent(parent))
        this.graph.getSelectedCells().forEach(cell => parent.addChild(cell))
    }

    handleUngroup() {
        this.graph.getSelectedCells().forEach(cell => {
            //if (cell.hasParent()) return;
            cell.setChildren(null);
            cell.remove() //TODO 会误删除
        })
    }


    isGroup(): boolean {
        if (this.graph.getSelectedCellCount() !== 1) return false;
        let current = this.graph.getSelectedCells()[0];
        //if (!current) return false;
        return current.getChildCount() > 0;
    }
}
