import { Component } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent {
  objectKeys = Object.keys;
  form = {
    radioValue: 'static',
    rows: 3,
    cols: 3,
  };
  tableData: any = [];
  headArr: any = [];
  rowTempl: any = {};
  constructor() {
    this.setColumns();
    this.setRows();
  }
  setColumns() {
    // 列
    const { cols } = this.form;
    const headArr = ['x'];
    const obj: any = { 'x': '' };
    for (let index = 1; index < cols; index++) {
      headArr.push(`y${index}`);
      obj[`y${index}`] = '';
    }
    this.headArr = headArr;
    this.rowTempl = obj;
  }
  setRows() {
    // 行
    const { rows } = this.form;
    this.tableData = new Array(rows).fill(0).map(() => JSON.parse(JSON.stringify(this.rowTempl)));;
  }
  handleRowsBlur(value: number) {
    const len = this.tableData.length;
    if (len > value) {
      this.tableData = this.tableData.splice(0, value);
    } else {
      const needAddRows = new Array(value - len).fill(0).map(() => JSON.parse(JSON.stringify(this.rowTempl)));//此处不用map的话会指向同一个地址，那么一改则全改
      this.tableData = this.tableData.concat(needAddRows);
    }
  }
  handleColsBlur(value: number) {
    const cols = this.headArr.length;
    if (cols > value) {
      this.headArr = this.headArr.splice(0, value);
    } else {
      const lastHead = this.headArr[cols - 1];
      const matched = /y(\w+)$/.exec(lastHead);
      const cur: number = matched ? Number(matched[1]) : 0;//当前head的y
      const newCol: any = {};
      for (let index = 0; index < value - cols; index++) {
        const i = `y${cur + index + 1}`;
        newCol[i] = '';
        this.headArr.push(i);
      }
      Object.assign(this.rowTempl, newCol);
      this.tableData.map((item: any) => Object.assign(item, newCol));
    }
  }
  getData() {
    const { tableData } = this;
    tableData.map((item: any) => {
      for (const key in item) {
        if (!Object.keys(this.rowTempl).includes(key)) {
          delete item[key];
        }
      }
    })
    console.log(tableData)
    return tableData;
  }
}
