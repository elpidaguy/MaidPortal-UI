import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateService } from './shared/services/app-state/app-state.service';


declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private appStateService: AppStateService,
  ) {
    const userData = localStorage.getItem('userData');
    const userType = localStorage.getItem('userType');
    // console.log(JSON.parse(userData));
    if (userData) {
      this.appStateService.userSubject.next(JSON.parse(userData));
      this.appStateService.isLoggedIn.next(true);
      this.appStateService.userType.next(JSON.parse(userType));
    }

    this.isLoggedIn$ = this.appStateService.isLoggedIn;
  }
}
