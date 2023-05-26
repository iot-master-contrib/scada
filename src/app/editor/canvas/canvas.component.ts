import { Component, ElementRef, Injector } from '@angular/core';
import { Edge, Graph, Node, Shape } from '@antv/x6';
import { Transform } from "@antv/x6-plugin-transform";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Clipboard } from "@antv/x6-plugin-clipboard";
import { Keyboard } from "@antv/x6-plugin-keyboard";
import { History } from "@antv/x6-plugin-history";
import { Selection } from "@antv/x6-plugin-selection";
import { Export } from "@antv/x6-plugin-export";
import { Dnd } from "@antv/x6-plugin-dnd";
import { register } from "@antv/x6-angular-shape";
import { HmiComponent, HmiDraw } from "../../hmi";

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {


    public graph: Graph;

    dnd: Dnd;

    line: HmiComponent | undefined;
    edge: Edge | undefined;

    constructor(private element: ElementRef, private injector: Injector) {
        this.graph = new Graph({
            container: element.nativeElement,
            width: 800,
            height: 600,
            background: {
                color: '#fff', // 设置画布背景颜色
            },
            grid: {
                size: 10,      // 网格大小 10px
                visible: true, // 渲染网格背景
                type: 'doubleMesh',
                args: [
                    {
                        color: '#f0f0f0', // 主网格线颜色
                        thickness: 1, // 主网格线宽度
                    },
                    {
                        color: '#d0d0d0', // 次网格线颜色
                        thickness: 1, // 次网格线宽度
                        factor: 4, // 主次网格线间隔
                    },
                ],
            },
            panning: {
                enabled: true,
                eventTypes: ['rightMouseDown']
            },
            mousewheel: {
                enabled: true,
                modifiers: ['ctrl', 'meta'],
            },
            connecting: { //连接器
                connector: 'normal'
            },
            highlighting: {
                // 当连接桩可以被链接时，在连接桩外围渲染一个 2px 宽的红色矩形框
                magnetAvailable: {
                    name: 'stroke',
                    args: {
                        padding: 4,
                        attrs: {
                            strokeWidth: 2,
                            stroke: 'rgba(223,234,255)',
                        },
                    },
                },
            },
        });
        // this.graph.enableHistory()
        // this.graph.enableClipboard()
        // this.graph.enableKeyboard()

        //补充插件
        this.graph.use(new Keyboard({ enabled: true }));
        this.graph.use(new Transform({ resizing: { enabled: true }, rotating: { enabled: true } }));
        this.graph.use(new Snapline({ enabled: true }))
        this.graph.use(new Clipboard({ enabled: true }))
        this.graph.use(new History({ enabled: true }));
        this.graph.use(new Selection({
            enabled: true, multiple: true,
            rubberband: true, movable: true,
            showNodeSelectionBox: true,
        }));
        this.graph.use(new Export());

        this.dnd = new Dnd({ target: this.graph });

        //this.graph.fromJSON(data)

        this.graph.bindKey('ctrl+s', (e) => {
            this.graph.exportPNG();
            e.preventDefault()
        })

        //快捷键
        this.graph.bindKey('ctrl+z', () => this.graph.undo())
        this.graph.bindKey('ctrl+y', () => this.graph.redo())
        this.graph.bindKey('ctrl+x', () => this.graph.cut(this.graph.getSelectedCells()))
        this.graph.bindKey('ctrl+c', () => this.graph.copy(this.graph.getSelectedCells()))
        this.graph.bindKey('ctrl+v', () => this.graph.paste())
        this.graph.bindKey('backspace', () => this.graph.getSelectedCells().forEach(cell => cell.remove()))


        this.graph.on("selection:changed", ($event) => {
            $event.removed.forEach(c => c.removeTools())
            $event.added.forEach(c => c.isEdge() && c.addTools(["vertices", "segments", "source-arrowhead", "target-arrowhead"]))
        })

        //this.graph.on("edge:click")

        this.graph.container.onclick = (event) => {
            //只有画线才处理
            if (this.line) {
                if (this.edge) {
                    this.edge = undefined
                    this.line = undefined //仅画一次
                } else {
                    this.edge = this.graph.addEdge({
                        shape: this.line.id,
                        source: [event.offsetX, event.offsetY],
                        target: [event.offsetX, event.offsetY],
                        ...this.line.meta
                    })
                }
            }
        }

        this.graph.container.onmousemove = (event) => {
            if (this.line) {
                if (this.edge) {
                    //console.log("move", event)
                    this.edge.setTarget({ x: event.offsetX, y: event.offsetY })
                }
            }
        }
    }

    public Draw($event: HmiDraw) {
        let node!: Node
        let component = $event.component
        switch (component.type) {
            case "line":
                if (this.line == component) {
                    this.line = undefined
                    return;
                }
                this.line = component
                //注册组件
                if (component.extends && !component.registered) {
                    Graph.registerEdge(component.id, component.extends)
                    component.registered = true
                }
                return;//剩下的交给画线工具了
            case "shape":
                //注册衍生组件
                if (component.extends && !component.registered) {
                    Graph.registerNode(component.id, component.extends)
                    component.registered = true
                }
                if (component.meta) node = this.graph.createNode({
                    shape: component.id,
                    ...component.meta,
                    data: { id: component.id, ...(component.meta.data || {}) },
                })
                break;
            case "angular":
                //避免重复注册
                if (!component.registered) {
                    register({
                        shape: component.id,
                        content: component.content,
                        width: 100,
                        height: 60,
                        injector: this.injector,
                    })
                    component.registered = true
                }
                if (component.content) node = this.graph.createNode({
                    shape: component.id,
                    ...component.meta,
                    data: { id: component.id },
                })
                break;
        }
        if (node && $event.event)
            this.dnd.start(node, $event.event);
    }

}
