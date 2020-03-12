import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as $$ from 'rxjs';

@Component({
  selector: 'app-parent',
  template: `
    <h3>4. Angular Async Pipe</h3>
    <app-child [num]="interval$ | async"></app-child>
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
export class ParentComponent {

  public interval$ = $$.interval(1000);

}
