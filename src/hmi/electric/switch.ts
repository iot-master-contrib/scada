import {HmiComponent} from "../hmi";
import {SwitchSvg} from "./switch.embed";
import {Cell} from "@antv/x6";


export const switchCenter = {
    x: 35,
    y: -2,
}

export const switchOpen = `rotate(-30 ${switchCenter.x} ${switchCenter.y})`
export const switchClose = `rotate(-12 ${switchCenter.x} ${switchCenter.y})`;

export const ElectricSwitch: HmiComponent = {
    name: '', id: 'electric-switch', svg: SwitchSvg, type: "shape",
    extends: {inherit: "rect"},
    meta: {
        width: 120, height: 130,
        data: {
            value: true
        },
        markup: [
            {
                tagName: 'g',
                selector: 'left-group',
                children: [
                    {
                        tagName: 'rect',
                        selector: 'left',
                        groupSelector: 'line',
                        attrs: {
                            x: 0,
                            y: 0,
                        },
                    },
                    {
                        tagName: 'circle',
                        selector: 'lco',
                        groupSelector: 'co',
                        attrs: {
                            cx: 30,
                        },
                    },
                    {
                        tagName: 'circle',
                        selector: 'lci',
                        groupSelector: 'ci',
                        attrs: {
                            cx: 30,
                        },
                    },
                ],
            },
            {
                tagName: 'rect',
                selector: 'switch',
                groupSelector: 'line',
            },
            {
                tagName: 'g',
                selector: 'right-group',
                children: [
                    {
                        tagName: 'rect',
                        selector: 'right',
                        groupSelector: 'line',
                        attrs: {
                            x: 70,
                            y: 0,
                        },
                    },
                    {
                        tagName: 'circle',
                        selector: 'rco',
                        groupSelector: 'co',
                        attrs: {
                            cx: 70,
                        },
                    },
                    {
                        tagName: 'circle',
                        selector: 'rci',
                        groupSelector: 'ci',
                        attrs: {
                            cx: 70,
                        },
                    },
                ],
            },
        ],
        attrs: {
            line: {
                width: 30,
                height: 2,
                fill: '#000',
                stroke: '#000',
            },
            co: {
                r: 8,
                fill: '#000',
            },
            ci: {
                r: 4,
                fill: '#fff',
            },
            switch: {
                ...switchCenter,
                width: 35,
                transform: switchOpen,
            },
        },
    },
    properties: [
        {path: 'data/disabled', name: "禁用", type: "boolean"},
    ],
    bindings: [
        {name: 'value', label: "数值", default: 12.06},
    ],
    events: [
        {name: 'change', label: "变化"},
    ],
    hooks: {
        value(cell, value) {
            cell.data.value = value;
            switchChange(cell)
        }
    },
    listeners: {
        click(cell, event) {
            //禁用不响应
            if (cell.data.disabled)
                return
            cell.data.value = !cell.data.value;
            switchChange(cell)
            cell.notify("custom", {cell, event: 'change', value: cell.data.value})
        }
    },
}

function switchChange(cell: Cell) {
    console.log('electric switch change', cell.data.value)

    const attrPath = 'attrs/switch/transform';
    const target = cell.data.value ? switchClose : switchOpen;
    cell.transition(attrPath, target, {
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
