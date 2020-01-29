import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { applicationConfiguration, AppConfig } from '@app-maidportal/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  email : any;
  constructor(
    private http: HttpClient,
    @Inject(applicationConfiguration) private appConfig: AppConfig
    ) { }


    sendMail(email) {
    // const url = `${this.appConfig.middlewareUrl}/email/sendMail?email=${user['email']}`;
    const url = `${this.appConfig.middlewareUrl}/email/sendMail?email=${email}`;
    // return this.http.post(url , email ,{headers: new HttpHeaders({
    //   'Content-Type': 'application/text'
    // })} ).toPromise();
    return this.http.post(url, email).toPromise();
    }

   // confirmOTP(otp: string) {
    confirmOTP(otp) {
      const url = `${this.appConfig.middlewareUrl}/email/confirmOTP?OTP=${otp}`;
      return this.http.post(url , {}).toPromise();
    }

    resetPassword(obj) {
      const url = `${this.appConfig.middlewareUrl}/admin/resetPassword?email=${obj.email}&newPassword=${obj.newPassword}`;
      return this.http.post<any>(url , {}).toPromise();
    }

}
