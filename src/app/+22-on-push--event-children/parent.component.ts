import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Interval counter: {{ num }}
    <app-counter></app-counter>
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

  public ngOnInit(): void {
    if (this.ref) return;

    this.ref = setInterval(() => {
      this.num++;
      console.log(`${ParentComponent.name} Number updated:`, this.num);
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (!this.ref) return;

    clearInterval(this.ref);
    this.ref = undefined;
  }
}
