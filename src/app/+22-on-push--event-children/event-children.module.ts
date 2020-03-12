import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ParentComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [ParentComponent, CounterComponent],
  providers: [],
})
export class EventChildrenModule {
}
