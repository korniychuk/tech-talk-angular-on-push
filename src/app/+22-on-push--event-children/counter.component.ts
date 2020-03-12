import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="add()">Add</button> {{ count }}<br>
  `,
  styles: [`
  :host {
    margin: 25px;
    display: flex;
    padding: 25px;
    background-color: #ccf;
    border: 1px dashed #333;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

  public count: number = 0;
  public add(): void {
    this.count++;
  }
}
