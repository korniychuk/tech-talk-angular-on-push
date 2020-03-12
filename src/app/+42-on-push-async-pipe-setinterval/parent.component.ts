import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>4. Angular Async Pipe | doesn't work via setInterval()</h3>
    <app-child [num]="num"></app-child>
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
export class ParentComponent implements OnInit, OnDestroy {

  public num: number = 0;
  private ref?: ReturnType<typeof setInterval>;

  public constructor(
    // private readonly $cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    if (this.ref) return;

    this.ref = setInterval(() => {
      this.num++;
      console.log('num changed', this.num);
      // this.$cdr.detectChanges();
      // this.$cdr.markForCheck();
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (!this.ref) return;

    clearInterval(this.ref);
    this.ref = undefined;
  }

}
