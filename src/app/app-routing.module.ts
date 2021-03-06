import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { IS_STABLE_FEATURE_URL } from './+61-is-stable/is-stable.feature-url';
import { RIGHT_MOUSE_MOVE_FEATURE_URL } from './+62-right-mouse-move/right-mouse-move.feature-url';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: INTERVAL_FEATURE_URL,
  },
  {
    path: INTERVAL_FEATURE_URL,
    loadChildren: () => import('./+01-interval/interval.module').then(m => m.IntervalModule),
  },
  {
    path: OTHER_MICROTASKS_FEATURE_URL,
    loadChildren: () => import('./+03-other-microtasks/other-microtasks.module').then(m => m.OtherMicrotasksModule),
  },
  {
    path: MOUSE_MOVE_FEATURE_URL,
    loadChildren: () => import('./+02-mouse-move/mouse-move.module').then(m => m.MouseMoveModule),
  },
  {
    path: INPUT_CHANGE_STRING_FEATURE_URL,
    loadChildren: () => import('./+11-on-push--input-change-string/input-change-string.module').then(m => m.InputChangeStringModule),
  },
  {
    path: INPUT_CHANGE_OBJECT_FEATURE_URL,
    loadChildren: () => import('./+12-on-push--input-change-object/input-change-object.module').then(m => m.InputChangeObjectModule),
  },
  {
    path: INPUT_CHANGE_NESTED_FEATURE_URL,
    loadChildren: () => import('./+13-on-push--input-change-nested/input-change-nested.module').then(m => m.InputChangeNestedModule),
  },
  {
    path: INPUT_CHANGE_NESTED_2_FEATURE_URL,
    loadChildren: () => import('./+14-on-push--input-change-nested-2/input-change-nested2.module').then(m => m.InputChangeNested2Module),
  },
  {
    path: EVENT_FEATURE_URL,
    loadChildren: () => import('./+21-on-push--event/event.module').then(m => m.EventModule),
  },
  {
    path: EVENT_CHILDREN_FEATURE_URL,
    loadChildren: () => import('./+22-on-push--event-children/event-children.module').then(m => m.EventChildrenModule),
  },
  {
    path: RUN_EXPLICITLY_FEATURE_URL,
    loadChildren: () => import('./+31-on-push--run-explicitly/run-explicitly.module').then(m => m.RunExplicitlyModule),
  },
  {
    path: RUN_EXPLICITLY_VIA_TICK_FEATURE_URL,
    loadChildren: () => import('./+32-on-push--run-explicitly-via-tick/run-explicitly-via-tick.module')
      .then(m => m.RunExplicitlyViaTickModule),
  },
  {
    path: ASYNC_PIPE_FEATURE_URL,
    loadChildren: () => import('./+41-on-push-async-pipe/async-pipe.module').then(m => m.AsyncPipeModule),
  },
  {
    path: ASYNC_PIPE_INTERVAL_FEATURE_URL,
    loadChildren: () => import('./+42-on-push-async-pipe-setinterval/async-pipe-interval.module').then(m => m.AsyncPipeIntervalModule),
  },
  {
    path: TABS_FEATURE_URL,
    loadChildren: () => import('./+51-tabs/tabs.module').then(m => m.TabsModule),
  },
  {
    path: TABS_2_FEATURE_URL,
    loadChildren: () => import('./+51-tabs-2/tabs-2.module').then(m => m.Tabs2Module),
  },
  {
    path: TODO_LIST_FEATURE_URL,
    loadChildren: () => import('./+52-todo-list/todo-list.module').then(m => m.TodoListModule),
  },
  {
    path: TODO_LIST_2_FEATURE_URL,
    loadChildren: () => import('./+52-todo-list-2/todo-list-2.module').then(m => m.TodoList2Module),
  },
  {
    path: IS_STABLE_FEATURE_URL,
    loadChildren: () => import('./+61-is-stable/is-stable.module').then(m => m.IsStableModule),
  },
  {
    path: RIGHT_MOUSE_MOVE_FEATURE_URL,
    loadChildren: () => import('./+62-right-mouse-move/right-mouse-move.module').then(m => m.RightMouseMoveModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
