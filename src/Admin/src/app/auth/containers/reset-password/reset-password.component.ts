import { Component, OnInit, Inject } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResetPasswordService } from '@app-maidportal/auth/services/reset-password.service';
import { Router } from '@angular/router';
import { AppConfig, applicationConfiguration } from '@app-maidportal/config/app.config';
import { ToastrService } from 'ngx-toastr';
import { AppMatchFieldsValidator } from '@app-maidportal/shared/validators/match-fields/match-fields.validator';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {


  resetPasswordForm = new FormGroup({
    email: new FormControl(''),
    newPassword: new FormControl(''),
    passwordConfirm: new FormControl(''),
    // this need has to be done yet
    // validator: AppMatchFieldsValidator('password', 'passwordConfirm')
  });

  constructor(
    private resetPasswordService: ResetPasswordService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    @Inject(applicationConfiguration) private appConfig: AppConfig
    ) { }

  ngOnInit() {
        this.resetPasswordForm = this.formBuilder.group(
      {
       // email: ['',[ Validators.required,Validators.email]],
        email: ['', [ Validators.required ]],
        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
      },
     { validator: AppMatchFieldsValidator('newPassword', 'passwordConfirm'),
    });
  }

  onSubmit() {
    console.log(this.resetPasswordForm.value);
    const obj = {
      email: this.resetPasswordForm.get('email').value,
      newPassword: this.resetPasswordForm.get('newPassword').value,
     // passwordConfirm: this.resetPasswordForm.get('passwordConfirm').value,
    };

    this.resetPasswordService.resetPassword(obj).then((response) => {
      console.log(response);
      this.toastrService.success('Reset Password Successful', '');
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.log(error);
      this.toastrService.error(error.error.text);
    });

}
  // control visibility of password mismatch error
  protected passwordMismatchError = (): boolean =>
  false
    // this.formErrorService.hasPasswordMismatchError(this.resetPasswordForm);

}
