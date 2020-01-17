import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm = new FormGroup({
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
    //this need has to be done yet
    //,validator: AppMatchFieldsValidator('password', 'passwordConfirm')
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.resetPasswordForm.value);
  }
  // control visibility of password mismatch error
  protected passwordMismatchError = (): boolean =>
  false;
    //this.formErrorService.hasPasswordMismatchError(this.resetPasswordForm);

}
