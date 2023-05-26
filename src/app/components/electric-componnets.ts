export const switchCenter = {
    x: 35,
    y: -2,
}
export const switchOpen = `rotate(-30 ${switchCenter.x} ${switchCenter.y})`
export const switchClose = `rotate(-12 ${switchCenter.x} ${switchCenter.y})`;
const isOpen = true;
const electricArr = [];
for (let index = 1; index < 21; index++) {
    electricArr.push({
        name: '', id: `electric${index}`, icon: `/assets/electric/electric${index}.svg`, type: "shape",
        extends: { inherit: "image" },
        meta: { width: 120, height: 130, imageUrl: `/assets/electric/electric${index}.svg` },
        properties: [],
    });
}
electricArr.push({
    name: '', id: 'electric-switch', icon: `/assets/electric/switch.svg`, type: "shape",
    extends: { inherit: "rect" },
    meta: {
        width: 120, height: 130,
        data: {
            value: isOpen
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
                transform: isOpen ? switchOpen : switchClose,
            },
        },
    },
    properties: [],
});
export default {
    name: '电力组件',
    nameEn: 'electric',
    components: electricArr
};