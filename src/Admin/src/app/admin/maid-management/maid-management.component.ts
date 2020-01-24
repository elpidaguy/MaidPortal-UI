import { Component, OnInit, Inject } from '@angular/core';
import { MasterService } from 'src/app/shared/services/master/master.service';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { isNgTemplate } from '@angular/compiler';
import { MaidService } from '@app-maidportal/shared/services/Maid/maid.service';
import { Maid } from '@app-maidportal/shared/models/Maid';

@Component({
  selector: 'app-maid-management',
  templateUrl: './maid-management.component.html',
  styleUrls: ['./maid-management.component.scss']
})
export class MaidManagementComponent implements OnInit {
  maidList: Maid[];

  constructor(
    private maidService:MaidService,
    private router: Router,
    private master:MasterService
    // @Inject(applicationConfiguration) private appConfig: AppConfig
  ) { }

  async ngOnInit() {
     //this.maidList = this.maidService.getMaidsList();
     const res = await this.maidService.getMaidsList();
    console.log(res);
    return this.maidList = (res as Maid[]);
  }

  onDeleteMaid(maidList: any){
   
   return this.maidService.deleteMaid(maidList); 
 }

  onReload() {

  }

  // onRejectMaid(id: number) {
  //   console.log(this.maidList);

  //   for (var v = 0; v < this.maidList.length; v++) {
  //     if (this.maidList[v].id === id) {
  //       console.log(this.maidList[v]);
  //       this.maidList.splice(this.maidList[v], 1);
  //     }
  //   }

  // }


}





