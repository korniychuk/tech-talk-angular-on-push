import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ParentComponent,
  }
];

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class InputChange1Module { }
