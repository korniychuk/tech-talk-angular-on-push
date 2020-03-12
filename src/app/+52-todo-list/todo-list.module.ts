import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './todos.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [ParentComponent, TodosComponent],
  providers: [],
})
export class TodoListModule {
}
