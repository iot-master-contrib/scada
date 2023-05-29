export const ports = {
    groups: {
        // 输入链接桩群组定义
        top: {
            position: 'top',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#2D8CF0',
                    strokeWidth: 2,
                    fill: '#fff',
                },
            },
        },
        // 输出链接桩群组定义
        bottom: {
            position: 'bottom',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#2D8CF0',
                    strokeWidth: 2,
                    fill: '#fff',
                },
            },
        },
        left: {
            position: 'left',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#2D8CF0',
                    strokeWidth: 2,
                    fill: '#fff',
                },
            },
        },
        right: {
            position: 'right',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#2D8CF0',
                    strokeWidth: 2,
                    fill: '#fff',
                },
            },
        },
    },
    items: [
        {
            id: 'port1',
            group: 'top',
        },
        {
            id: 'port2',
            group: 'bottom',
        },
        {
            id: 'port3',
            group: 'left',
        },
        {
            id: 'port4',
            group: 'right',
        }
    ],
}