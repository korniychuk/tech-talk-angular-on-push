import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TimerComponent } from './timer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TimerComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [TimerComponent],
  providers: [],
})
export class RunExplicitlyViaTickModule {
}
