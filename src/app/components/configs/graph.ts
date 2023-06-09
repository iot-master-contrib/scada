

const option = localStorage.getItem("bgc-option") || '{}';

const graphBgc = Object.assign({
    color: '#fff',
    gridType: 'doubleMesh'
}, JSON.parse(option));

export { graphBgc }