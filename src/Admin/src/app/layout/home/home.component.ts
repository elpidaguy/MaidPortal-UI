import { Component, OnInit } from '@angular/core';
import { faSave, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import { MasterService } from 'src/app/shared/services/master/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselSlides: any[];
  announcements: any[];
  announcementForm: FormGroup;
  foannouncementFormrm = new FormGroup({
    announcement: new FormControl('')
  });
  faUpload = faUpload;
  faSave = faSave;
  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.carouselSlides = [];
    this.announcements = [];

    this.masterService.getCarouselSlides().then((slides: any[]) => {
      slides.forEach((element) => {
          this.carouselSlides.push(element);
      });
    });

    this.masterService.getAnnouncements().then((listAnnouncements: any[]) => {
      listAnnouncements.forEach((element) => {
        this.announcements.push(element);
      });
    });
  }

}
