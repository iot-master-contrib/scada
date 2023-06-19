import { Component, EventEmitter, Input, Output, forwardRef, OnInit, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorInputComponent),
    multi: true
  }]
})
export class ColorInputComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }
  ngOnInit(): void {
  }
  writeValue(obj: any): void {
    this.color = obj || '';
    console.log("🚀 ~ file:", obj, this.color)
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  @Output() colorChange = new EventEmitter<number>();
  color: any;
  colorPickerChange(color: any) {
    console.log("property change", color)
    this.color = color;
    this.onChanged(color);
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
    this.color = '';
    this.onChanged(this.color);
  }
}
