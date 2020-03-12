import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo [todo]="todo" *ngFor="let todo of todos"></app-todo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input()
  public todos: Todo[] = [];
}

