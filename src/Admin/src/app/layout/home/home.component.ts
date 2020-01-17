import { Component, OnInit } from '@angular/core';
import { faSave, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  announcementForm: FormGroup;
  foannouncementFormrm = new FormGroup({
    announcement: new FormControl('')
   
  });
  faUpload = faUpload;
  faSave = faSave;
  constructor() { }

  ngOnInit() {
  }

}
