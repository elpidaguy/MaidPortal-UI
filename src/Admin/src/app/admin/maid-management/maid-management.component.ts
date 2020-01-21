import { Component, OnInit, Inject } from '@angular/core';
import { MasterService } from 'src/app/shared/services/master/master.service';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-maid-management',
  templateUrl: './maid-management.component.html',
  styleUrls: ['./maid-management.component.scss']
})
export class MaidManagementComponent implements OnInit {
  maidList: any = [];

  constructor(
    private masterSvc: MasterService,
    private router: Router,
    // @Inject(applicationConfiguration) private appConfig: AppConfig
  ) { }

  ngOnInit() {
    // this.maidList = this.masterSvc.getMaids();
  }

  onReload() {

  }

  onRejectMaid(id: number) {
    console.log(this.maidList);

    for (var v = 0; v < this.maidList.length; v++) {
      if (this.maidList[v].id === id) {
        console.log(this.maidList[v]);
        this.maidList.splice(this.maidList[v], 1);
      }
    }

  }


}





