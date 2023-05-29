import { Component, Input } from '@angular/core';
import { HmiComponent, HmiProperty } from "../../hmi";
import { Cell, FunctionExt, Graph } from "@antv/x6";
import { COMPONENTS } from "../../components/components";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { switchOpen, switchClose, switchCenter } from 'src/app/components/electric-componnets';
@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {

    @Input() set graph(g: Graph) {
        g.on("cell:change:size", (event) => {
            if (event.cell == this.cell)
                this.formSize.patchValue(event.current as any)
        })
        g.on("cell:change:position", (event) => {
            if (event.cell == this.cell)
                this.formPosition.patchValue(event.current as any)
        })
        g.on("cell:unselected", (event) => {
            if (event.cell == this.cell) {
                // @ts-ignore
                this.cmp = undefined
            }
        })
        g.on("selection:changed", () => {
            if (g.getSelectedCellCount() === 1) {
                this.cell = g.getSelectedCells()[0]
                console.log("selection:changed", this.cell)
                // cell.getData()
                //this.cmp = g.getSelectedCells()[0].getData()
                //console.log(this.cmp)
                if (this.cell.isNode()) {
                    const pos = this.cell.getPosition()
                    this.formPosition.patchValue(pos)
                    const size = this.cell.getSize()
                    this.formSize.patchValue(size)
                    //const value = {...pos, ...size}
                    //console.log("position", value)
                    //setTimeout(()=>this.group.patchValue(value), 0)
                    //this.group.patchValue(value)
                    //this.zone.run(()=>this.formPosition.patchValue(value))
                }

                //找到组件 TODO 应该索引
                COMPONENTS.find(g => g.components.find(c => {
                    if (c.id === this.cell.shape) {
                        this.cmp = c
                        return true
                    }
                    return false
                }))
            }
        })
        g.on('node:click', ({ node, e }) => {
            const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            this.showPorts(ports, false);

            const data = node.data;
            if (data.id.includes('switch')) {
                const attrPath = 'attrs/switch/transform';
                const target = data.value ? switchClose : switchOpen;
                data.value = !data.value;
                this.cell.transition(attrPath, target, {
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
        })

        // 鼠标移入移出节点
        g.on('node:mouseenter', FunctionExt.debounce(({ e }) => {
            const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            this.showPorts(ports, true);
        }), 500);
        g.on('node:mouseleave', ({ e }) => {
            const ports = e.target.parentElement.querySelectorAll(".x6-port-body");
            this.showPorts(ports, false);
        })
    }

    cell!: Cell
    cmp!: HmiComponent

    formPosition!: FormGroup;
    formSize!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formPosition = fb.group({
            x: [0, [Validators.required]],
            y: [0, [Validators.required]],
        })
        this.formSize = fb.group({
            width: [0, [Validators.required]],
            height: [0, [Validators.required]],
        })
        //this.formPosition.patchValue({x:1,y:2})
    }

    inputChange($event: any, p: HmiProperty) {
        console.log("property input change", p.path, $event)
        //this.cell.setAttrByPath(p.path, $event.target.value)
        this.cell.setPropByPath(p.path, $event.target.value)
    }

    change($event: any, p: HmiProperty) {
        console.log("property change", p.path, $event)
        //this.cell.setAttrByPath(p.path, $event)
        this.cell.setPropByPath(p.path, $event)
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

    handleEditData() {

    }

    showPorts(ports: any, show: boolean) {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
            ports[i].style.visibility = show ? 'visible' : 'hidden';
        }
    }
}
