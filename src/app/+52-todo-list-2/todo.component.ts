import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  template: `{{ todo?.title }} {{ runChangeDetection }}<br>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input()
  public todo?: Todo;

  get runChangeDetection() {
    console.log('TodoComponent - Checking the view');
    return true;
  }

}
