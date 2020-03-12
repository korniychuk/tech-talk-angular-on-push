import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <button (click)="add()">Add</button>
    <app-todos [todos]="todos"></app-todos>
  `,
  styles: [
      `
      :host {
        margin: 25px;
        display: flex;
        padding: 25px;
        background-color: #cfc;
        border: 1px dashed #333;
      }
    `,
  ],
})
export class ParentComponent {
  public todos = [{ title: 'One' }, { title: 'Two' }];

  public add() {
    this.todos = [...this.todos, { title: 'Three' }];
  }
}
