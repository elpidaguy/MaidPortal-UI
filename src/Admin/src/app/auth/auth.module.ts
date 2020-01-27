import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
//auth components
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
//routing
import { AuthRoutingModule } from './auth-routing.module';
import { AppAuthService } from './services/app-auth.service';
import { RegisterComponent } from './containers/register/register.component';
import { ConfirmOtpComponent } from './containers/confirm-otp/confirm-otp.component';
import { RegisterServiceService } from './services/register-service.service';



@NgModule({
  declarations:
  [ForgotPasswordComponent,
     LoginComponent,
     ResetPasswordComponent,
     RegisterComponent,
     ConfirmOtpComponent
    ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ],
  providers: [AppAuthService,
  RegisterServiceService]
})
export class AuthModule { }
