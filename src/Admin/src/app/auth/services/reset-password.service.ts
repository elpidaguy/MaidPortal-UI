import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { applicationConfiguration, AppConfig } from '@app-maidportal/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  email: any;
  otp: any;
  constructor(
    private http: HttpClient,
    @Inject(applicationConfiguration) private appConfig: AppConfig
    ) { }


    sendMail(email) {
    const url = `${this.appConfig.middlewareUrl}/email/sendMail?email=${email}`;
    return this.http.post(url, email).toPromise();
    }

    confirmOTP(otp) {
      const url = `${this.appConfig.middlewareUrl}/email/confirmOTP?otp=${otp}`;
      return this.http.post(url , otp).toPromise();
    }

    resetPassword(obj) {
      const url = `${this.appConfig.middlewareUrl}/admin/resetPassword?email=${obj.email}&newPassword=${obj.newPassword}`;
      return this.http.post<any>(url , {}).toPromise();
    }

}
