import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  template: `
    Counter: {{ num }}<br>
    Getter: {{ value }}
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalWithGetterComponent implements OnInit, OnDestroy {
  public num: number = 0;

  public get value(): string {
    console.log('getter `value` executed:', this.num);
    return 'hello';
  }

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
