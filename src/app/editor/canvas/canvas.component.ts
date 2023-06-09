import { Component, ElementRef, Injector, ViewContainerRef } from '@angular/core';

import { Edge, FunctionExt, Graph, Node, Shape } from '@antv/x6';

import { Transform } from "@antv/x6-plugin-transform";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Clipboard } from "@antv/x6-plugin-clipboard";
import { Keyboard } from "@antv/x6-plugin-keyboard";
import { History } from "@antv/x6-plugin-history";
import { Selection } from "@antv/x6-plugin-selection";
import { Export } from "@antv/x6-plugin-export";
import { Dnd } from "@antv/x6-plugin-dnd";

import { HmiComponent, HmiDraw, HmiPage } from "../../../hmi/hmi";

import { ComponentService } from "../../component.service";
import { NzModalService } from 'ng-zorro-antd/modal';
import { SetChartComponent } from '../set-chart/set-chart.component';


@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent {
    public graph: Graph;

    dnd: Dnd;

    line: HmiComponent | undefined;
    edge: Edge | undefined;

    constructor(
        private cs: ComponentService,
        private element: ElementRef,
        private injector: Injector,
        private viewContainerRef: ViewContainerRef,
        private modal: NzModalService
    ) {

        this.graph = new Graph({
            container: element.nativeElement,
            background: {
                //color: graphBgc.color, // 设置画布背景颜色
            },
            grid: {
                size: 10,      // 网格大小 10px
                visible: JSON.parse(localStorage.getItem("show_grid") || 'true'), // 渲染网格背景
                type: "mesh",
            },
            connecting: { //连线交互
                snap: false,//是否自动吸附
                connector: 'normal',
                createEdge() {
                    return new Shape.Edge({
                        shape: 'line',
                        attrs: {
                            line: {
                                stroke: '#333',
                                strokeWidth: 1,
                                targetMarker: null,
                                strokeDasharray: 0, //虚线
                                style: {
                                    animation: 'ant-line 30s infinite linear',
                                },
                            },
                        },
                        label: {
                            text: ''
                        },
                        router: {
                            name: 'normal'
                        },
                    })
                },

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

        //补充插件
        this.graph.use(new Keyboard({ enabled: true }));
        this.graph.use(new Transform({ resizing: { enabled: true }, rotating: { enabled: true } }));
        this.graph.use(new Snapline({ enabled: true }))
        this.graph.use(new Clipboard({ enabled: true }))
        this.graph.use(new History({ enabled: true }));
        this.graph.use(new Selection({//选中
            enabled: true,
            multiple: true,
            rubberband: true,
            rubberEdge: true,
            movable: true,
            strict: true,
            showNodeSelectionBox: true
        }));
        this.graph.use(new Export());

        this.dnd = new Dnd({ target: this.graph });

        this.graph.bindKey('ctrl+s', (e) => {
            this.graph.exportPNG();
            e.preventDefault()
        })

        //快捷键
        this.graph.bindKey('ctrl+z', () => this.graph.undo())
        this.graph.bindKey('ctrl+y', () => this.graph.redo())
        this.graph.bindKey('ctrl+x', () => this.graph.cut(this.graph.getSelectedCells(), { deep: true }))
        this.graph.bindKey('ctrl+c', () => this.graph.copy(this.graph.getSelectedCells(), { deep: true }))
        this.graph.bindKey('ctrl+v', () => this.graph.resetSelection(this.graph.paste()))
        this.graph.bindKey('backspace', () => this.graph.getSelectedCells().forEach(cell => cell.remove()))
        this.graph.bindKey('delete', () => this.graph.getSelectedCells().forEach(cell => cell.remove()))

        this.graph.container.onmousemove = (event) => {
            if (this.line) {
                this.graph.addEdge({
                    shape: this.line.id,
                    source: [event.offsetX, event.offsetY],
                    target: [(event.offsetX) - 120, (event.offsetY) + 80],
                    ...this.line.meta
                });
                this.line = undefined;
            }
        }

        this.graph.on('edge:selected', FunctionExt.debounce(({ edge }) => {

            edge.addTools([{
                name: 'source-arrowhead',
                args: {
                    attrs: {
                        cursor: 'pointer',
                        fill: '#3c9566',
                    }
                }
            }, {
                name: 'target-arrowhead',
                args: {
                    attrs: {
                        cursor: 'pointer',
                        fill: '#3c9566',
                    }
                }
            }, {
                name: 'vertices',
                args: {
                    attrs: {
                        fill: '#3c9566',
                        cursor: 'crosshair',
                    },
                    stopPropagation: false
                },
            }])
        }))

        this.graph.on('edge:unselected', ({ cell }) => {
            cell.removeTools();
        })

        // 鼠标移入移出节点
        this.graph.on('node:mouseenter', FunctionExt.debounce(({ e }) => {
            //const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            //this.showPorts(ports, true);
        }), 500);
        this.graph.on('node:mouseleave', ({ e }) => {
            //const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            //this.showPorts(ports, false);
        });
        this.graph.on('blank:click', () => {
            //const ports = document.querySelectorAll(".x6-port-body");
            //this.showPorts(ports, false);
        })

        this.graph.on('node:click', ({ node, e }) => {
            //console.log('node')
            //const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            //this.showPorts(ports, false);
        });

        this.graph.on("cell:selected", (data) => {
            console.log(111111111, data)
        })

        this.graph.on('cell:click', ({ cell, e }) => {
            let cmp = this.cs.Get(cell.shape)
            // @ts-ignore
            cmp?.listeners?.click?.call(this, cell, e)
        });

        this.graph.on('cell:mouseenter', ({ cell, e }) => {
            //console.log("cell:mouseenter", cell.shape)
            let cmp = this.cs.Get(cell.shape)
            // @ts-ignore
            cmp?.listeners?.mouseenter?.call(this, cell, e)
        });

        this.graph.on('cell:mouseleave', ({ cell, e }) => {
            //console.log("cell:mouseleave")
            let cmp = this.cs.Get(cell.shape)
            // @ts-ignore
            cmp?.listeners?.mouseleave?.call(this, cell, e)
        });
    }

    public Render(page: HmiPage) {
        page.content?.cells?.forEach((cell: any) => {
            const cmp = this.cs.Get(cell.shape)
            //TODO 使用filter 过滤掉找不到组件的情况
        })
        this.graph.drawBackground({
            color: page.background_color,
            image: page.background_image,
        })
        this.graph.fromJSON(page.content)
    }

    public Draw($event: HmiDraw) {
        let node!: Node
        let { component } = $event;

        //检查是否已经注册
        this.cs.CheckRegister(component)

        switch (component.type) {
            case "line":
                this.line = component;
                return
            case "shape":
            case "svg":
                // let tools: any = ['node-editor'];
                // if (component.id === 'text-block') {
                //     tools = [];
                // }
                let data: any = {}
                component.bindings?.forEach(b => data[b.name] = b.default)
                node = this.graph.createNode({
                    shape: component.id,
                    ...component.meta,
                    data: data,
                    //tools
                    // ports
                })
                break;
            case "chart":
                this.modal.create({
                    nzTitle: "配置图表",
                    nzMaskClosable: false,//点击蒙版不允许关闭
                    nzContent: SetChartComponent,
                    nzComponentParams: {
                        component,
                    },
                    nzFooter: null,
                }).afterClose.subscribe((res) => {
                    if (!component.registered) return
                    this.graph.addNode({
                        shape: component.id,
                        x: 60,
                        y: 100,
                        data: {...res}
                    })
                })
                break;
        }
        console.log(node)
        if (node && $event.event)
            this.dnd.start(node, $event.event);
    }

    public showPorts(ports: any, show: boolean) {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
            ports[i].style.visibility = show ? 'visible' : 'hidden';
        }
    }
}
