import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FirstComponent,
  },
];

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class IsStableModule { }
