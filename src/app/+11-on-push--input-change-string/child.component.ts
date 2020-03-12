import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      Counter: {{ num }}
      <div>
        Label: <code>{{ label }}</code>
      </div>
    </div>
  `,
  styles: [
      `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
        border: 1px dashed #333;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input()
  public label: string = 'Default Label';

  public num: number = 0;

  private ref?: ReturnType<typeof setInterval>;

  public ngOnInit(): void {
    if (this.ref) return;

    this.ref = setInterval(() => {
      this.num++;
      console.log(`${ChildComponent.name} Number updated:`, this.num);
    }, 1000);
  }

  public ngOnDestroy(): void {
    if (!this.ref) return;

    clearInterval(this.ref);
    this.ref = undefined;
  }

}
