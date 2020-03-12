import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';
import { Child2Component } from './child-2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ParentComponent,
  }
];

@NgModule({
  declarations: [ParentComponent, ChildComponent, Child2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class InputChangeNestedModule { }
