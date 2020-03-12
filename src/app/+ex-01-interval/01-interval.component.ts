import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  template: `
    Counter: {{ num }}<br>
  `,
})
export class IntervalComponent implements OnInit, OnDestroy {
  public num: number = 0;

  private ref?: ReturnType<typeof setInterval>;

  public ngOnInit(): void {
    if (this.ref) return;

    this.ref = setInterval(() => {
      this.num++;
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (!this.ref) return;

    clearInterval(this.ref);
    this.ref = undefined;
  }

}
