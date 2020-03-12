import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CounterComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [CounterComponent],
  providers: [],
})
export class EventModule {
}
