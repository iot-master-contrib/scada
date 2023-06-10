import {Component, ElementRef, Injector, Input} from '@angular/core';

import {Edge, FunctionExt, Graph, Model, Node, Shape} from '@antv/x6';

import {Transform} from "@antv/x6-plugin-transform";
import {Snapline} from "@antv/x6-plugin-snapline";
import {Clipboard} from "@antv/x6-plugin-clipboard";
import {Keyboard} from "@antv/x6-plugin-keyboard";
import {History} from "@antv/x6-plugin-history";
import {Selection} from "@antv/x6-plugin-selection";
import {Export} from "@antv/x6-plugin-export";
import {Dnd} from "@antv/x6-plugin-dnd";
import {register} from "@antv/x6-angular-shape";

import {HmiComponent, HmiDraw} from "../../hmi";

import {ports} from 'src/app/components/configs/ports';
import {ComponentService} from "../../component.service";
import {switchCenter, switchClose, switchOpen} from "../../components/electric/switch";

//import { switchOpen, switchClose, switchCenter } from 'src/app/components/electric/components';


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
        private injector: Injector) {

        this.graph = new Graph({
            container: element.nativeElement,
            //width: 800,
            //height: 600,
            //autoResize: true,
            background: {
                //color: graphBgc.color, // 设置画布背景颜色
            },
            grid: {
                size: 10,      // 网格大小 10px
                visible: JSON.parse(localStorage.getItem("show_grid") || 'true'), // 渲染网格背景
                type: "mesh",
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
            panning: {//画布是否可以拖拽平移，默认禁用
                enabled: false,
                eventTypes: ['rightMouseDown']
            },
            mousewheel: {
                enabled: true,
                modifiers: ['ctrl', 'meta'],
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
        // this.graph.enableHistory()
        // this.graph.enableClipboard()
        // this.graph.enableKeyboard()

        //补充插件
        this.graph.use(new Keyboard({enabled: true}));
        this.graph.use(new Transform({resizing: {enabled: true}, rotating: {enabled: true}}));
        this.graph.use(new Snapline({enabled: true}))
        this.graph.use(new Clipboard({enabled: true}))
        this.graph.use(new History({enabled: true}));
        this.graph.use(new Selection({//选中
            enabled: true,
            multiple: true,
            rubberband: true,
            movable: true,
            strict: true,
            showNodeSelectionBox: true
        }));
        this.graph.use(new Export());

        this.dnd = new Dnd({target: this.graph});

        //this.graph.fromJSON(data)
        this.graph.toJSON()

        this.graph.bindKey('ctrl+s', (e) => {
            this.graph.exportPNG();
            e.preventDefault()
        })

        //快捷键
        this.graph.bindKey('ctrl+z', () => this.graph.undo())
        this.graph.bindKey('ctrl+y', () => this.graph.redo())
        this.graph.bindKey('ctrl+x', () => this.graph.cut(this.graph.getSelectedCells()))
        this.graph.bindKey('ctrl+c', () => this.graph.copy(this.graph.getSelectedCells()))
        this.graph.bindKey('ctrl+v', () => this.graph.resetSelection(this.graph.paste()))
        this.graph.bindKey('backspace', () => this.graph.getSelectedCells().forEach(cell => cell.remove()))

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

        this.graph.on('edge:selected', FunctionExt.debounce(({edge}) => {
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

        this.graph.on('edge:unselected', ({cell}) => {
            cell.removeTools();
        })

        // 鼠标移入移出节点
        this.graph.on('node:mouseenter', FunctionExt.debounce(({e}) => {
            const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            this.showPorts(ports, true);
        }), 500);
        this.graph.on('node:mouseleave', ({e}) => {
            const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            this.showPorts(ports, false);
        });
        this.graph.on('blank:click', () => {
            const ports = document.querySelectorAll(".x6-port-body");
            this.showPorts(ports, false);
        })

        this.graph.on('node:click', ({node, e}) => {
            console.log('node')
            const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            this.showPorts(ports, false);

            const data = node.data;

            //TODO 移动到switch.ts中
            if (/electric-switch/.test(data.id)) {
                const attrPath = 'attrs/switch/transform';
                const target = data.value ? switchClose : switchOpen;
                data.value = !data.value;
                node.transition(attrPath, target, {
                    interp: (a: string, b: string) => {
                        const reg = /-?\d+/g
                        const start = parseInt(a.match(reg)![0], 10)
                        const end = parseInt(b.match(reg)![0], 10)
                        const d = end - start
                        return (t: number) => {
                            return `rotate(${start + d * t} ${switchCenter.x} ${switchCenter.y})`
                        }
                    },
                })
            }
        });

    }

    public Render(data: any) {
        data.cells?.forEach((cell: any) => {
            //cell.shape
        })
        this.graph.fromJSON(data)
    }

    public Draw($event: HmiDraw) {
        let node!: Node
        let {component} = $event;
        switch (component.type) {
            case "line":
                //注册组件
                if (component.extends && !component.registered) {
                    Graph.registerEdge(component.id, component.extends)
                    component.registered = true
                }
                this.line = component;
                // this.graph.createEdge({
                //     shape: component.id,
                // })
                return
            case "shape":
                //注册衍生组件
                if (component.extends && !component.registered) {
                    Graph.registerNode(component.id, component.extends)
                    component.registered = true
                }
                if (component.meta) {
                    let tools: any = ['node-editor'];
                    if (component.id === 'text-block') {
                        tools = [];
                    }
                    node = this.graph.createNode({
                        shape: component.id,
                        ...component.meta,
                        data: {id: component.id, ...(component.meta.data || {})},
                        tools
                        // ports
                    })
                }
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
                    data: {id: component.id},
                    ports
                })
                break;
        }
        if (node && $event.event)
            this.dnd.start(node, $event.event);
    }

    public showPorts(ports: any, show: boolean) {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
            ports[i].style.visibility = show ? 'visible' : 'hidden';
        }
    }
}
