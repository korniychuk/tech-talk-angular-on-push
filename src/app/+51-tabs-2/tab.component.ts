import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `{{ contentInternal }}`,
  styles: [`
  :host {
    margin: 25px;
    display: flex;
    padding: 25px;
    background-color: #ccf;
    border: 1px dashed #333;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {

  @Input()
  public set content(value: string) {
    console.log('content changed:', value);
    this.contentInternal = value;
    this.$cdr.markForCheck();
  }

  public contentInternal?: string;

  public constructor(
    private readonly $cdr: ChangeDetectorRef,
  ) {}

}
