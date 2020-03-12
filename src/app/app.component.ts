import { Component } from '@angular/core';
import { INTERVAL_FEATURE_URL } from './+01-interval/interval.feature-url';
import { MOUSE_MOVE_FEATURE_URL } from './+02-mouse-move/mouse-move.feature-url';

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
  ];
}
