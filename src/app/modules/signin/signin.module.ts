import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { SigninComponent } from './signin.component';
import { SignRoutingModule } from './signin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SignRoutingModule
  ],
  declarations: [SigninComponent],
  exports: [SigninComponent]
})
export class SigninModule { }
