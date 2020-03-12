import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { INTERVAL_FEATURE_URL } from './+ex-01-interval/interval.feature-url';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: INTERVAL_FEATURE_URL,
  },
  {
    path: INTERVAL_FEATURE_URL,
    loadChildren: () => import('./+ex-01-interval/interval.module').then(m => m.IntervalModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
