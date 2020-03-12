// tslint:disable:member-ordering
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>2. An event originated from the component or one of its children.</h3>
    <div>
      <button (click)="add()">Add</button> {{ count }}<br>
      Interval counter: {{ num }}
    </div>
  `,
  styles: [ `
    :host {
      margin: 25px;
      display: flex;
      padding: 25px;
      background-color: #cfc;
      border: 1px dashed #333;
    }
  ` ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit, OnDestroy {

  public count: number = 0;
  public add(): void {
    this.count++;
  }




  public num: number = 0;
  private ref?: ReturnType<typeof setInterval>;

  public ngOnInit(): void {
    if (this.ref) return;

    this.ref = setInterval(() => {
      this.num++;
      console.log(`${CounterComponent.name} Number updated:`, this.num);
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (!this.ref) return;

    clearInterval(this.ref);
    this.ref = undefined;
  }
}
