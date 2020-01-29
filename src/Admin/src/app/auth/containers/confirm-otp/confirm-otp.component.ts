import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig, applicationConfiguration } from '@app-maidportal/config/app.config';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from '@app-maidportal/auth/services/reset-password.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss']
})
export class ConfirmOtpComponent implements OnInit {
  confirmOTP = new FormGroup({
    otp: new FormControl('')
  });
constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private resetPasswordService: ResetPasswordService,
    private toasterService: ToastrService,
    @Inject(applicationConfiguration) private appConfig: AppConfig,
  ) { }

ngOnInit() {
  this.confirmOTP = this.formBuilder.group({otp : ''});
}

onSubmit() {
  const obj =  this.confirmOTP.get('otp').value.toString();
  this.resetPasswordService.confirmOTP(obj).then((response) => {
    this.toasterService.success('OTP Confirmed', '', { timeOut : 1200 });
    this.router.navigateByUrl('/reset-password');
  }).catch((error) => {
    console.log(error);
    // this.router.navigateByUrl('/reset-password');
    this.toasterService.show('Password Reset Failed');
    this.toasterService.error(error.error.text);
  });
}

}
