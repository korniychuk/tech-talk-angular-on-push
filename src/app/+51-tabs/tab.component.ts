import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `{{content}}`,
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
  public content?: string;
}
