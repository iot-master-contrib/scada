const pipeImg = ['pipe1', 'pipe2', 'pipe3', 'pipe4', 'pipe5', 'pipe6', 'pipe7', 'pipe8', 'pipe9', 'pipe10', 'pipe11'
    , 'device1', 'device2', 'device3', 'device4', 'device5', 'device6', 'device7', 'device8', 'device9', 'device10', 'device11',
];

const industryArr = [];
for (let index = 0; index < pipeImg.length; index++) {
    const item = pipeImg[index];
    industryArr.push({
        name: '', id: `pipe${index}`, icon: `/app/scada/assets/industry/${item}.svg`, type: "shape",
        extends: { inherit: "image" },
        meta: { width: 80, height: 80, imageUrl: `/app/scada/assets/industry/${item}.svg` },
        properties: [],
    })
};

export default {
    name: '工业组件',
    nameEn: 'industry',
    components: industryArr
}
