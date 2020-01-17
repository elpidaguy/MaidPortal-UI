import { Component, OnInit } from '@angular/core';
import { faPhone, faQuestionCircle, faInfoCircle, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faPhone = faPhone;
  faQuestionCircle = faQuestionCircle;
  faFile = faFile;
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit() {
  }

}
