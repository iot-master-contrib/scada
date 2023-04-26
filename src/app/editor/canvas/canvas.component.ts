import {Component, ElementRef, Injector} from '@angular/core';
import {Graph, Node} from '@antv/x6';
import {Transform} from "@antv/x6-plugin-transform";
import {Snapline} from "@antv/x6-plugin-snapline";
import {Clipboard} from "@antv/x6-plugin-clipboard";
import {Keyboard} from "@antv/x6-plugin-keyboard";
import {History} from "@antv/x6-plugin-history";
import {Selection} from "@antv/x6-plugin-selection";
import {Export} from "@antv/x6-plugin-export";
import {Dnd} from "@antv/x6-plugin-dnd";
import {HmiDrag} from "../../hmi";
import {register} from "@antv/x6-angular-shape";

const data = {
    // 节点
    nodes: [
        {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40,       // Number，必选，节点位置的 x 值
            y: 40,       // Number，必选，节点位置的 y 值
            width: 80,   // Number，可选，节点大小的 width 值
            height: 40,  // Number，可选，节点大小的 height 值
            label: '测试', // String，节点标签
        },
        {
            id: 'node2', // String，节点的唯一标识
            x: 160,      // Number，必选，节点位置的 x 值
            y: 180,      // Number，必选，节点位置的 y 值
            width: 80,   // Number，可选，节点大小的 width 值
            height: 40,  // Number，可选，节点大小的 height 值
            label: '组态', // String，节点标签
        },
    ],
    // 边
    edges: [
        {
            source: 'node1', // String，必须，起始节点 id
            target: 'node2', // String，必须，目标节点 id
        },
    ],
};

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {

    public graph: Graph;

    dnd: Dnd;

    constructor(private element: ElementRef, private injector: Injector) {
        this.graph = new Graph({
            container: element.nativeElement,
            width: 800,
            height: 600,
            background: {
                color: '#fffbe6', // 设置画布背景颜色
            },
            grid: {
                size: 10,      // 网格大小 10px
                type: 'mesh',
                visible: true, // 渲染网格背景
            },
            panning: {
                enabled: true,
                eventTypes: ['rightMouseDown']
            },
            mousewheel: {
                enabled: true,
                modifiers: ['ctrl', 'meta'],
            },
        });


        //补充插件
        this.graph.use(new Transform({resizing: {enabled: true}, rotating: {enabled: true}}));
        this.graph.use(new Snapline({enabled: true}))
        this.graph.use(new Clipboard({enabled: true}))
        this.graph.use(new Keyboard({enabled: true}));
        this.graph.use(new History({enabled: true}));
        this.graph.use(new Selection({
            enabled: true, multiple: true,
            rubberband: true, movable: true,
            showNodeSelectionBox: true,
        }));
        this.graph.use(new Export());

        this.dnd = new Dnd({target: this.graph});

        this.graph.fromJSON(data)
    }

    public Drop($event: HmiDrag) {
        let node!: Node
        let component = $event.component
        switch (component.type) {
            case "shape":
                if (component.meta) node = this.graph.createNode(component.meta)
                break;
            case "angular":
                register({
                    shape: component.id,
                    content: component.content,
                    width: 100,
                    height: 60,
                    injector: this.injector,
                })
                if (component.content) node = this.graph.createNode({
                    shape: component.id,
                    data: {}
                })
                break;
        }
        if (node)
            this.dnd.start(node, $event.event);
    }

    HandleToolbar($event: string) {
        console.log("handleToolbar", $event)
        switch ($event) {
            case "save":
                break;
            case "export":
                this.graph.exportJPEG()
                break;
            case"undo":
                this.graph.undo
                break;
            case"redo":
                this.graph.redo()
                break;
            case"cut":
                this.graph.cut(this.graph.getSelectedCells())
                break;
            case"copy":
                this.graph.copy(this.graph.getSelectedCells())
                break;
            case"paste":
                this.graph.paste()
                break;
            case "delete":
                this.graph.getSelectedCells().forEach(cell => cell.remove())
                break
            case"align-left":
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
                break;
            case"align-center":
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
                break;
            case"align-right":
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
                break;
            case"valign-top":
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
                break;
            case"valign-middle":
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
                break;
            case"valign-bottom":
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
                break;
            case"move-top":
                //this.graph.getSelectedCells().forEach(cell=>cell.)
                break;
            case"move-up":
                break;
            case"move-down":
                break;
            case"move-bottom":
                break;
            case"group":
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
                break;
            case"ungroup":
                this.graph.getSelectedCells().forEach(cell => {
                    //if (cell.hasParent()) return;
                    cell.setChildren(null);
                    cell.remove() //TODO 会误删除
                })
                break;

        }
    }
}
