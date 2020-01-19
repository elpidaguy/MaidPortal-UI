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
    this.isLoggedIn$ = this.appStateService.isLoggedIn;
  }
}
