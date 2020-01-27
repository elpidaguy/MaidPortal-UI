import { Component, OnInit, Inject } from '@angular/core';
import { MaidService } from '@app-maidportal/shared/services/Maid/maid.service';
import { Maid } from '@app-maidportal/shared/models/Maid';
import { faTrashAlt, faCircle, faPlusCircle, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maid-management',
  templateUrl: './maid-management.component.html',
  styleUrls: ['./maid-management.component.scss']
})
export class MaidManagementComponent implements OnInit {
  maidList: Maid[];
  faTrash = faTrashAlt;
  faCircle = faCircle;
  faPlusCircle = faPlusCircle;
  faPen = faPen;

  constructor(private maidService: MaidService) { }

   async onReload() {
     const res = await this.maidService.getMaidsList();
     return this.maidList = (res as Maid[]);
  }

  //   onFresh() {
  //   //const res =   this.maidService.getMaidsList();
  //   return this.maidList = this.maidService.getMaidsList();
  // }

  async ngOnInit() {
    this.onReload();
  //   const res = await this.maidService.getMaidsList();
  //  // console.log(res);
  //   return this.maidList = (res as Maid[]);
  }

  onDeleteMaid(maidList: any) {
    return this.maidService.deleteMaid(maidList);
    this.onReload();
  }

}





