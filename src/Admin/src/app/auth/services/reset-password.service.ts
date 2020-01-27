import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { applicationConfiguration, AppConfig } from '@app-maidportal/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(
    private http: HttpClient,
    @Inject(applicationConfiguration) private appConfig: AppConfig
    ) { }


    sendMail(user) {
    const url = `${this.appConfig.middlewareUrl}/email/sendMail?email=${user['email']}`;
    return this.http.post(url , {}).toPromise();
    }

   // confirmOTP(otp: string) {
    confirmOTP(otp) {
      const url = `${this.appConfig.middlewareUrl}/email/confirmOTP?OTP=${otp}`;
      return this.http.post(url , {}).toPromise();
    }

    resetPassword(user) {
      const url = `${this.appConfig.middlewareUrl}/admin/resetPassword?email=${user['email']}&password=${user['password']}`;
      return this.http.post(url , {}).toPromise();
    }

}
