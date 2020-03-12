import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    {{ value }}
  `,
  styles: [ `
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      width: 300px;
      height: 300px;
      background-color: #bfb;
      border: 2px dashed #333;
    }
  ` ]
})
export class SecondComponent {

  public num: number = 0;

  public get value(): string {
    console.log('SECOND:', this.num++);
    return 'hello';
  }

}
