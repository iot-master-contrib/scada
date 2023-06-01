import { Component, Input } from '@angular/core';
import { HmiComponent, HmiProperty } from "../../hmi";
import { Cell, Graph } from "@antv/x6";
import { COMPONENTS } from "../../components/components";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {
    selected: any = [];
    textProperties: HmiProperty[] = [
        { name: "文本", path: "attrs/text/text", type: "text" },
        { name: "文本颜色", path: "attrs/text/fill", type: "color" },
        { name: "字号", path: "attrs/text/fontSize", type: "stroke" },
    ]
    @Input() set graph(g: Graph) {
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
                this.cell.setPropByPath('attrs/label/text', ele.innerText)
            }
        })
        g.on("selection:changed", ({ selected }) => {
            this.selected = selected;
            if (g.getSelectedCellCount() === 1) {
                this.cell = g.getSelectedCells()[0]
                console.log("🚀 ~ file: property.component.ts:38 ~ PropertyComponent ~ g.on ~ this.cell:", this.cell)

                // cell.getData()
                //this.cmp = g.getSelectedCells()[0].getData()
                if (this.cell.isNode()) {
                    const pos = this.cell.getPosition()
                    this.formPosition.patchValue(pos)
                    const size = this.cell.getSize()
                    this.formSize.patchValue(size);
                    //const value = {...pos, ...size}
                    //console.log("position", value)
                    //setTimeout(()=>this.group.patchValue(value), 0)
                    //this.group.patchValue(value)
                    //this.zone.run(()=>this.formPosition.patchValue(value))
                } else if (this.cell.isEdge()) {
                    const source = this.cell.getProp('source');
                    const target = this.cell.getProp('target');
                    this.formLinePosition.patchValue({ source, target });
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
    }

    cell!: Cell
    cmp!: HmiComponent

    formPosition!: FormGroup;
    formSize!: FormGroup;
    formLinePosition!: FormGroup;

    constructor(private fb: FormBuilder) {
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
    onLinePositionChange($event: Event) {
        this.cell.setProp(this.formLinePosition.value);
    }
    handleEditData() {

    }
    colorCheckChange(selected: boolean, p: HmiProperty) {
        const color = selected ? '#333' : 'none';
        this.cell.setPropByPath(p.path, color)
    }
}
