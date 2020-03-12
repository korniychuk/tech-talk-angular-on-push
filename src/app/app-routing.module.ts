import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { INTERVAL_FEATURE_URL } from './+01-interval/interval.feature-url';
import { MOUSE_MOVE_FEATURE_URL } from './+02-mouse-move/mouse-move.feature-url';
import { INPUT_CHANGE_STRING_FEATURE_URL } from './+11-on-push--input-change-string/input-change-string.feature-url';
import { INPUT_CHANGE_OBJECT_FEATURE_URL } from './+12-on-push--input-change-object/input-change-object.feature-url';
import { INPUT_CHANGE_NESTED_FEATURE_URL } from './+13-on-push--input-change-nested/input-change-nested.feature-url';
import { INPUT_CHANGE_NESTED_2_FEATURE_URL } from './+14-on-push--input-change-nested-2/input-change-nested-2.feature-url';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
