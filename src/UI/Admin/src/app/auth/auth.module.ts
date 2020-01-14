import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';


@NgModule({
  declarations: [ForgotPasswordComponent, LoginComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
