import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStateService } from 'src/app/shared/services/app-state/app-state.service';
import { applicationConfiguration, AppConfig } from 'src/app/config/app.config';
import { tap, delay } from 'rxjs/operators';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  userType = '';

  constructor(
    private http: HttpClient,
    private appStateService: AppStateService,
    private router: Router,
    @Inject(applicationConfiguration) private appConfig: AppConfig
  ) { }

  login(user) {
    const url = `${this.appConfig.middlewareUrl}/auth/login?email=${user['email']}&password=${user['password']}&userType=${user['userType']}`;
    return this.http.post(url, {}).toPromise();
  }

  logout(): Observable<any> {
    this.appStateService.isLoggedIn.next(false);
    this.appStateService.userSubject.next(null);
    localStorage.removeItem('userData');
    return of(this.router.navigate(['/login']));

  }
}
