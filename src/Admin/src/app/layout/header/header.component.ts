import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AppConfig, applicationConfiguration } from 'src/app/config/app.config';
import { AppStateService } from 'src/app/shared/services/app-state/app-state.service';
import { Observable } from 'rxjs';
import { AppAuthService } from 'src/app/auth/services/app-auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;
  faCaretDown = faCaretDown;
  faSignOutAlt = faSignOutAlt;
  user$: Observable<any> = this.appStateService.userSubject;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private appStateService: AppStateService,
    private authService: AppAuthService,
    @Inject(applicationConfiguration) protected appConfig: AppConfig
  ) { }

  ngOnInit() {
    // this.appStateService.userSubject.subscribe((r) => {
    //   console.log(r);
    // });

    this.appStateService.isLoggedIn.subscribe((e) => {
      this.isLoggedIn = e;
    });
  }

  logout() {
    this.authService.logout();
  }

  // TODO: we should move responsibility for 'showing' up to the parent component instead of hard-coding route-names.
  showHeader() {
    const hiddenRoutes = [
      '/login',
      '/register',
      '/forgot-password',
      '/reset-password',
    ];
    return !hiddenRoutes.some((el) => this.router.url.indexOf(el) > -1);
  }

}
