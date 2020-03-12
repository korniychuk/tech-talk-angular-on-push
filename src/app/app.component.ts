import { Component } from '@angular/core';

import { INTERVAL_FEATURE_URL } from './+01-interval/interval.feature-url';
import { MOUSE_MOVE_FEATURE_URL } from './+02-mouse-move/mouse-move.feature-url';
import { INPUT_CHANGE_STRING_FEATURE_URL } from './+11-on-push--input-change-string/input-change-string.feature-url';
import { INPUT_CHANGE_OBJECT_FEATURE_URL } from './+12-on-push--input-change-object/input-change-object.feature-url';
import { INPUT_CHANGE_NESTED_FEATURE_URL } from './+13-on-push--input-change-nested/input-change-nested.feature-url';
import { INPUT_CHANGE_NESTED_2_FEATURE_URL } from './+14-on-push--input-change-nested-2/input-change-nested-2.feature-url';
import { EVENT_FEATURE_URL } from './+21-on-push--event/event.feature-url';
import { EVENT_CHILDREN_FEATURE_URL } from './+22-on-push--event-children/event-children.feature-url';
import { OTHER_MICROTASKS_FEATURE_URL } from './+03-other-microtasks/other-mickrotasks.feature-url';
import { RUN_EXPLICITLY_FEATURE_URL } from './+31-on-push--run-explicitly/run-explicitly.feature-url';
import { RUN_EXPLICITLY_VIA_TICK_FEATURE_URL } from './+32-on-push--run-explicitly-via-tick/run-explicitly-via-tick.feature-url';
import { ASYNC_PIPE_FEATURE_URL } from './+41-on-push-async-pipe/async-pipe.feature-url';
import { ASYNC_PIPE_INTERVAL_FEATURE_URL } from './+42-on-push-async-pipe-setinterval/async-pipe-interval.feature-url';
import { TABS_FEATURE_URL } from './+51-tabs/tabs.feature-url';
import { TABS_2_FEATURE_URL } from './+51-tabs-2/tabs-2.feature-url';
import { TODO_LIST_FEATURE_URL } from './+52-todo-list/todo-list.feature-url';
import { TODO_LIST_2_FEATURE_URL } from './+52-todo-list-2/todo-list-2.feature-url';
import { IS_STABLE_FEATURE_URL } from './+62-is-stable/is-stable.feature-url';

@Component({
  selector: 'app-root',
  template: `
    <h1>Tech Talk: Zone.js | Angular Change Detection</h1>
    <hr>
    <div>
      <ng-container *ngFor="let route of routes">
        <button *ngIf="route; else delimiter"
                [routerLink]="route.path"
                [routerLinkActive]="route.path"
        >{{ route.label }}</button>
        <ng-template #delimiter><br></ng-template>
      </ng-container>
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
      label: 'Other microtasks',
      path: OTHER_MICROTASKS_FEATURE_URL,
    },
    undefined,
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
    {
      label: 'OnPush | Input change | nested 2',
      path: INPUT_CHANGE_NESTED_2_FEATURE_URL,
    },
    undefined,
    {
      label: 'OnPush | Event',
      path: EVENT_FEATURE_URL,
    },
    {
      label: 'OnPush | Event from Children',
      path: EVENT_CHILDREN_FEATURE_URL,
    },
    undefined,
    {
      label: 'On Push | Run Explicitly',
      path: RUN_EXPLICITLY_FEATURE_URL,
    },
    {
      label: 'On Push | Run Explicitly via ApplicationRef.tick()',
      path: RUN_EXPLICITLY_VIA_TICK_FEATURE_URL,
    },
    undefined,
    {
      label: 'On Push | Async Pipe',
      path: ASYNC_PIPE_FEATURE_URL,
    },
    {
      label: 'On Push | Async Pipe | Interval',
      path: ASYNC_PIPE_INTERVAL_FEATURE_URL,
    },
    undefined,
    {
      label: 'Tabs',
      path: TABS_FEATURE_URL,
    },
    {
      label: 'Tabs 2',
      path: TABS_2_FEATURE_URL,
    },
    {
      label: 'Todo List',
      path: TODO_LIST_FEATURE_URL,
    },
    {
      label: 'Todo List 2',
      path: TODO_LIST_2_FEATURE_URL,
    },
    undefined,
    {
      label: 'Is Stable',
      path: IS_STABLE_FEATURE_URL,
    },
  ];
}
