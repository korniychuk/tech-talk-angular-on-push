import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
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
  declarations: [ParentComponent, TabsComponent, TabComponent],
  providers: [],
})
export class Tabs2Module {
}
