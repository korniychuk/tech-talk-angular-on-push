import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { FooterNoCdComponent } from './footer-no-cd.component';

@NgModule({
  declarations: [FooterComponent, FooterNoCdComponent],
  exports: [FooterComponent, FooterNoCdComponent],
  imports: [
    CommonModule,
  ]
})
export class FooterModule { }
