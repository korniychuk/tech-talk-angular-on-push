import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IntervalComponent } from './01-interval.component';
import { IntervalWithGetterComponent } from './02-interval-with-getter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IntervalComponent,
  },
  {
    path: 'with-getter',
    component: IntervalWithGetterComponent,
  },
];

@NgModule({
  declarations: [IntervalComponent, IntervalWithGetterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class IntervalModule { }
