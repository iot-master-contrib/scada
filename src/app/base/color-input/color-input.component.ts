import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent {
  @Input() color = '';
  @Output() colorChange = new EventEmitter<number>();
  change(color: any) {
    console.log("property change", color)
    this.colorChange.emit(color);
    //保存历史
    let colors = this.getPresentColors()
    let index = colors.indexOf(color)
    if (index > -1) {
      colors.splice(index, 1)
    }
    colors.unshift(color)
    if (colors.length > 12) {
      colors.length = 12
    }
    this.setPresentColors(colors)
  }
  getPresentColors() {
    let str = localStorage.getItem("bgc-colors")
    if (str) {
      try {
        return JSON.parse(str)
      } catch (e) {
      }
    }
    return []
  }

  setPresentColors(colors: any) {
    localStorage.setItem("bgc-colors", JSON.stringify(colors))
  }

  clearColor() {
  }
}
