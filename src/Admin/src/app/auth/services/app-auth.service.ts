import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStateService } from 'src/app/shared/services/app-state/app-state.service';
import { applicationConfiguration, AppConfig } from 'src/app/config/app.config';

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

  login(user, userType) {
    userType === 'customer' ? this.userType = 'customer' : this.userType = 'maid';

    const url = `${this.appConfig.middlewareUrl}/${this.userType}/login`;
    return this.http.post(url, user).toPromise();
  }

  logout(): Observable<any> {
    this.appStateService.isLoggedIn.next(false);
    this.appStateService.userSubject.next(null);
    localStorage.removeItem('userData');
    // this.router.navigate(['/login']);
    return of(this.router.navigate(['/login']));

  }
}
