import { Injectable, Inject } from '@angular/core';
import { applicationConfiguration, AppConfig } from 'src/app/config/app.config';
import { HttpClient } from '@angular/common/http';
import { AppStateService } from '@app-maidportal/shared';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  userType = '';

  constructor(
    private http: HttpClient,
    private appStateService: AppStateService,
    private router: Router,
    @Inject(applicationConfiguration) private appConfig: AppConfig
  ) { }


  register(user, userType) {
    userType === 'customer' ? this.userType = 'customer' : this.userType = 'maid';
    const url = `${this.appConfig.middlewareUrl}/${this.userType}/register`;
    return this.http.post(url, user).toPromise();
  }
}
