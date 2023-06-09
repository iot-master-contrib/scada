import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cell, Graph } from "@antv/x6";
import { ECharts } from 'echarts';
import { HmiComponent, HmiProject } from "../../../hmi/hmi";
import { ComponentService } from "../../component.service";

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {
    @Input() project!: HmiProject;

    @Output() onPageChange = new EventEmitter<number>();

    selected: Cell[] = [];
    echartsInstance = null
    private g!: Graph;

    get graph() {
        return this.g;
    }

    @Input() set graph(g: Graph) {
        this.g = g;

        g.on("cell:change:size", (event) => {
            if (event.cell == this.cell) {
                this.formSize.patchValue(event.current as any)
                if (this.isChart(this.cell.shape)) {
                    this.resizeChart(this.cell);
                }
            }

        })

        g.on("cell:change:position", (event) => {
            if (event.cell == this.cell)
                this.formPosition.patchValue(event.current as any)
        })

        g.on("cell:unselected", ({ cell }) => {
            if (cell == this.cell) {
                // @ts-ignore
                this.cmp = undefined;
                this.echartsInstance = null;
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
                if (this.isChart(this.cell.shape)) {
                    this.echartsInstance = this.cell.data.echartsInstance;
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

    constructor(private fb: FormBuilder, private cs: ComponentService) {

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
        //console.log("onPositionChange", this.formPosition.value)
        if (this.cell.isNode()) {
            this.cell.setPosition(this.formPosition.value)
        }
    }

    onSizeChange($event: Event) {
        // console.log("onPositionChange", this.formSize.value)
        if (this.cell.isNode()) {
            this.cell.setSize(this.formSize.value)
        }
        if (this.isChart(this.cell.shape)) {
            // 图表
            this.resizeChart(this.cell);
        }
    }

    onLinePositionChange($event: Event) {
        this.cell.setProp(this.formLinePosition.value);
    }

    isChart(shape: string) {
        return /^chart-/.test(shape);
    }
    resizeChart(cell: Cell) {
        const { echartsInstance } = cell.data;
        echartsInstance.resize(this.formSize.value)
    }
}
