import {HmiComponent} from "../../hmi";


export const switchCenter = {
    x: 35,
    y: -2,
}

export const switchOpen = `rotate(-30 ${switchCenter.x} ${switchCenter.y})`
export const switchClose = `rotate(-12 ${switchCenter.x} ${switchCenter.y})`;

export const ElectricSwitch: HmiComponent = {
    name: '', id: 'electric-switch', icon: `/app/scada/assets/electric/switch.svg`, type: "shape",
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
    properties: [],
}
