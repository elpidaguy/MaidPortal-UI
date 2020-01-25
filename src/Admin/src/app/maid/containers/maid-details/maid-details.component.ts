import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, tap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { MaidService } from '@app-maidportal/shared/services/Maid/maid.service';


@Component({
  selector: 'app-maid-details',
  templateUrl: './maid-details.component.html',
  styleUrls: ['./maid-details.component.scss']
})
export class MaidDetailsComponent implements OnInit {

  currentMaidID: string;
  maid: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private maidService: MaidService
  ) {
    this.getMaidID();
  }

  ngOnInit(): void {
    this.maidService.getMaidById(this.currentMaidID).then((res) => {
      this.maid = res;
    });
  }

  private getMaidID() {
    this.activatedRoute.params.subscribe((param) => {
      this.currentMaidID = param.maidID;
    });
  }
}
