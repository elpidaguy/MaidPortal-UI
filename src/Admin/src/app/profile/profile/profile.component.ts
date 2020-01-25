import { Component, OnInit } from '@angular/core';
import { ProfileTab } from '../models/profile-tabs.enum';
import { Observable } from 'rxjs';
import { AppStateService } from 'src/app/shared/services/app-state/app-state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedTab: string;
  tabs: ProfileTab[];
  user$: Observable<any> = this.appStateService.userSubject;
 


  constructor(
    private appStateService: AppStateService,
  ) { 
    this.tabs = [
      { display: 'Details', route: ['/profile', 'details'] },
    ];
  }
  ngOnInit(): void {
    this.selectTab(this.tabs[0]);
  }

  selectTab(tab: ProfileTab): void {
    this.selectedTab = tab.display;
  }

}
