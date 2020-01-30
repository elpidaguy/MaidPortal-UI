import { Component, OnInit, Inject } from '@angular/core';
import { MaidService } from '@app-maidportal/shared/services/Maid/maid.service';
import { Maid } from '@app-maidportal/shared/models/Maid';
import { faTrashAlt, faCircle, faPlusCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { applicationConfiguration, AppConfig } from '@app-maidportal/config/app.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-maid-management',
  templateUrl: './maid-management.component.html',
  styleUrls: ['./maid-management.component.scss']
})
export class MaidManagementComponent implements OnInit {
  maidList: Maid[];
  // maid: Maid;
  faTrash = faTrashAlt;
  faCircle = faCircle;
  faPlusCircle = faPlusCircle;
  faPen = faPen;

  constructor(
    private maidService: MaidService,
    private router: Router,
    private toasterService: ToastrService,
    @Inject(applicationConfiguration) private appConfig: AppConfig
    ) { }

   async onReload() {
     const res = await this.maidService.getMaidsList();
     return this.maidList = (res as Maid[]);
  }

  async ngOnInit() {
    this.onReload();
  //   const res = await this.maidService.getMaidsList();
  //  // console.log(res);
  //   return this.maidList = (res as Maid[]);
  }

  onDeleteMaid(maid: any) {
    return this.maidService.deleteMaid(maid);
    this.onReload();
  }

   onUpdateMaid(id: any) {
      // this.maidService.getMaidById(id).then((response) => {
      //   console.log(response);
      //   this.toasterService.success('Going to Detals Page Details Page', '');
      // //  this.router.navigateByUrl('/maid-details');
        this.router.navigate(['maid-update', id]);
      // }).catch((error) => {
      //   console.log(error);
      //   this.toasterService.error(error.error.text);
      // });
  }


}





