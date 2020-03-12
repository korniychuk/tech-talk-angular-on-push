import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { INTERVAL_FEATURE_URL } from './+01-interval/interval.feature-url';
import { MOUSE_MOVE_FEATURE_URL } from './+02-mouse-move/mouse-move.feature-url';
import { INPUT_CHANGE_1_FEATURE_URL } from './+11-on-push--input-change-1/input-change-1.feature-url';

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
    path: INPUT_CHANGE_1_FEATURE_URL,
    loadChildren: () => import('./+11-on-push--input-change-1/input-change-1.module').then(m => m.InputChange1Module),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
