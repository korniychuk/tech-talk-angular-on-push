import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    Label: {{ num }}
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
export class ChildComponent implements OnInit {

  @Input()
  public num?: number;

  public ngOnInit() {
  }
}
