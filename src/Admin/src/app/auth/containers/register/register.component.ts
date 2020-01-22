import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { from } from 'rxjs';
import { FormErrorService } from 'src/app/shared/services/form-error/form-error.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/models/Customer';
import { AppConfig, applicationConfiguration } from 'src/app/config/app.config';
import { ToastrService } from 'ngx-toastr';
import { RegexService } from 'src/app/shared/services/regex/regex.service';
import { AppMatchFieldsValidator } from 'src/app/shared/validators/match-fields.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  me: Customer;
  alive = true;
  constructor(
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private router: Router,
    private toastrService: ToastrService,
    private regexService: RegexService,
    @Inject(applicationConfiguration) private appConfig: AppConfig
    ) { }

  ngOnInit() {
    this.setForm();
  }
  private setForm() {
    this.form = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        firstName: [
          '',
          [
            Validators.required,
            Validators.pattern(this.regexService.HumanName),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.pattern(this.regexService.HumanName),
          ],
        ],
        gender: '',
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.pattern(this.regexService.Phone)],
        aadharCardNo: ['', [Validators.required, Validators.pattern(this.regexService.AadharCard)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validator: AppMatchFieldsValidator('password', 'ConfirmPassword'),
      }
    );
  }
  onSubmit() {
    if (this.form.status === 'INVALID') {
      return this.formErrorService.displayFormErrors(this.form);
    }

    const me = this.form.value as Customer;
    me._isActive = true;
    this.router.navigate(['/login']);

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.alive = false;
  }
 // control display of error messages
 public hasRequiredError = (controlName: string): boolean =>
 this.formErrorService.hasRequiredError(controlName, this.form)
public hasEmailError = (): boolean =>
 // tslint:disable-next-line: semicolon
 this.formErrorService.hasInvalidEmailError(this.form.get('Email'));
public hasPatternError = (controlName: string) =>
 // tslint:disable-next-line: semicolon
 this.formErrorService.hasPatternError(controlName, this.form);
public passwordMismatchError = (): boolean =>
 // tslint:disable-next-line: semicolon
 this.formErrorService.hasPasswordMismatchError(this.form);
 public noTextError = (controlName: string): boolean =>
 // tslint:disable-next-line: semicolon
 this.formErrorService.hasRequiredError(controlName, this.form);
}
