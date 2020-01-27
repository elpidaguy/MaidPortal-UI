import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// auth components
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { RegisterComponent } from './containers/register/register.component';
import { ConfirmOtpComponent } from './containers/confirm-otp/confirm-otp.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'confirm-otp', component: ConfirmOtpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
