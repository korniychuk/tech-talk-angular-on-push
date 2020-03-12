import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-move',
  template: `
    <app-first></app-first>
    <app-second></app-second>
  `,
})

export class MouseMoveComponent implements OnInit {

  public ngOnInit() {
  }
}
