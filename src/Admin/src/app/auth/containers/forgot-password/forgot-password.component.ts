import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from '@app-maidportal/auth/services/reset-password.service';
import { ToastrService } from 'ngx-toastr';
import { AppConfig, applicationConfiguration } from '@app-maidportal/config/app.config';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

 // email: any;
  // resetEmailForm: FormGroup ;
   resetEmailForm = new FormGroup({
     email: new FormControl('')
   });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private resetPasswordService: ResetPasswordService,
    private toasterService: ToastrService,
    @Inject(applicationConfiguration) private appConfig: AppConfig
  ) { }

  async ngOnInit() {
    this.resetEmailForm = this.formBuilder.group({ email: '' });
  }

   async onSubmit() {
     // obj : any ;
     const obj = this.resetEmailForm.get('email').value.toString();
      // this.resetPasswordService.sendMail({
      //   email: this.resetEmailForm.get('email').value.toString(),
      // }).then(
     this.resetPasswordService.sendMail(obj).then(
        (response) => {
          this.toasterService.success('OTP is sent', 'Success');
          this.router.navigateByUrl('/confirm-otp');
        }
      ).catch(
        (error) => {
          console.log(error);
          this.toasterService.error(error.error.text);
        }
      );



   // console.log(this.resetEmailForm.value);
  //   const obj = {
  //     email : this.resetEmailForm.get('email').value.toString()
  //   };

  //   this.resetPasswordService.sendMail(obj).then((response) => {
  //  // this.resetPasswordService.sendMail(this.email).then((response) => {
  //     this.toasterService.success('', '', {timeOut: 1500});
  //     this.router.navigateByUrl('/confirm-otp');
  //   }).catch((error) => {
  //     console.log(error);
  //    // this.router.navigateByUrl('/confirm-otp');
  //     this.toasterService.show('email send failed');
  //     this.toasterService.error(error.error.text);
  //   });
  }


}
