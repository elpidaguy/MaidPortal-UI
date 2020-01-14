import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//auth components
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
//routing
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [ForgotPasswordComponent, LoginComponent, ResetPasswordComponent],
  imports: [AuthRoutingModule],
  exports: [RouterModule]
})
export class AuthModule { }
