import { Component } from '@angular/core';

import { INTERVAL_FEATURE_URL } from './+01-interval/interval.feature-url';
import { MOUSE_MOVE_FEATURE_URL } from './+02-mouse-move/mouse-move.feature-url';
import { INPUT_CHANGE_STRING_FEATURE_URL } from './+11-on-push--input-change-string/input-change-string.feature-url';
import { INPUT_CHANGE_OBJECT_FEATURE_URL } from './+12-on-push--input-change-object/input-change-object.feature-url';
import { INPUT_CHANGE_NESTED_FEATURE_URL } from './+13-on-push--input-change-nested/input-change-nested.feature-url';

@Component({
  selector: 'app-root',
  template: `
    <h1>Tech Talk: Zone.js | Angular Change Detection</h1>
    <hr>
    <div>
        <button *ngFor="let route of routes"
                [routerLink]="route.path"
                [routerLinkActive]="route.path"
        >{{ route.label }}</button>
    </div>
    <hr>
    <router-outlet></router-outlet>

    <app-footer></app-footer>
<!--    <app-footer-no-cd></app-footer-no-cd>-->
  `
})
export class AppComponent {
  public routes = [
    {
      label: 'Interval',
      path: INTERVAL_FEATURE_URL,
    },
    {
      label: 'Interval with a getter',
      path: INTERVAL_FEATURE_URL + '/with-getter',
    },
    {
      label: 'Mouse Move',
      path: MOUSE_MOVE_FEATURE_URL,
    },
    {
      label: 'OnPush | Input change | string',
      path: INPUT_CHANGE_STRING_FEATURE_URL,
    },
    {
      label: 'OnPush | Input change | object',
      path: INPUT_CHANGE_OBJECT_FEATURE_URL,
    },
    {
      label: 'OnPush | Input change | nested',
      path: INPUT_CHANGE_NESTED_FEATURE_URL,
    },
  ];
}
