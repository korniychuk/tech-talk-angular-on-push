import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { OtherMicrotasksComponent } from './other-microtasks.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OtherMicrotasksComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [OtherMicrotasksComponent],
  providers: [],
})
export class OtherMicrotasksModule {
}
