import { Component, OnInit } from '@angular/core';
import {
  faBoxOpen,
  faSignOutAlt,
  faUser,
  faUsers,
  faMapMarkerAlt,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  faBoxOpen = faBoxOpen;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faUsers = faUsers;
  faMapMarker = faMapMarkerAlt;
  faSitemap = faSitemap;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['/login']);
  }

}
