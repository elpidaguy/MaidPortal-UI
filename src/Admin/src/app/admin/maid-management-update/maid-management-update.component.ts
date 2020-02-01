import { Component, OnInit, Inject } from '@angular/core';
import { applicationConfiguration, AppConfig } from '@app-maidportal/config/app.config';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MaidService } from '@app-maidportal/shared/services/Maid/maid.service';
import { AppMatchFieldsValidator } from '@app-maidportal/shared/validators/match-fields/match-fields.validator';
import { Maid } from '@app-maidportal/shared/models/Maid';

@Component({
  selector: 'app-maid-management-update',
  templateUrl: './maid-management-update.component.html',
  styleUrls: ['./maid-management-update.component.scss']
})
export class MaidManagementUpdateComponent implements OnInit {

  maid: any ;
  id: any;
  // detailsUpdateForm: FormGroup;
  // detailsUpdateForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   userType: new FormControl(''),
  // });
  form: FormGroup;
  regexService: any;

  constructor(
    private maidService: MaidService,
    private router: Router ,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toasterService: ToastrService,
    @Inject(applicationConfiguration) private appConfig: AppConfig ,
  ) { }

  ngOnInit() {

    this.maid = new Maid();

    this.id = this.route.snapshot.params.id;
     // this.maid = this.maidService.getMaidById(this.id);
    this.maidService.getMaidById(this.id).then((response) => {
        console.log(response);
        this.maid = response;
      });

  }

  onSubmit() {
    this.maidService.updateMaid(this.maid).then((response) => {
      console.log(this.maid);
      console.log(response);
     // this.router.navigateByUrl('');
      window.location.reload();
      this.toasterService.success('Successfull Update', '');
    }).catch((error) => {
      console.log(this.maid);
      this.toasterService.error(error.error.text);
    });

  }

}
