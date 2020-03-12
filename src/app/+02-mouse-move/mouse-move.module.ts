import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first.component';
import { MouseMoveComponent } from './mouse-move.component';
import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MouseMoveComponent,
  },
];

@NgModule({
  declarations: [MouseMoveComponent, FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MouseMoveModule { }
