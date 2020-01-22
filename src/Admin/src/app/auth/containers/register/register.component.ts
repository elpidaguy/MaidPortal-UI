import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/shared/services/form-error/form-error.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/models/Customer';
import { AppConfig, applicationConfiguration } from 'src/app/config/app.config';
import { RegexService } from 'src/app/shared/services/regex/regex.service';
import { AppMatchFieldsValidator } from '@app-maidportal/shared/validators/match-fields/match-fields.validator';


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
    private regexService: RegexService,
    @Inject(applicationConfiguration) private appConfig: AppConfig
  ) { }

  ngOnInit() {
    this.setForm();
  }
  private setForm() {
    this.form = this.formBuilder.group(
      {
        Username: ['', Validators.required],
        FirstName: [
          '',
          [
            Validators.required,
            Validators.pattern(this.regexService.HumanName),
          ],
        ],
        LastName: [
          '',
          [
            Validators.required,
            Validators.pattern(this.regexService.HumanName),
          ],
        ],
        Email: ['', [Validators.required, Validators.email]],
        Phone: ['', Validators.pattern(this.regexService.Phone)],
        Password: ['', [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validator: AppMatchFieldsValidator('Password', 'ConfirmPassword'),
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
  ngOnDestroy() {
    this.alive = false;
  }
  // control display of error messages
  public hasRequiredError = (controlName: string): boolean =>
    this.formErrorService.hasRequiredError(controlName, this.form);
  public hasEmailError = (): boolean =>
    this.formErrorService.hasInvalidEmailError(this.form.get('Email'));
  public hasPatternError = (controlName: string) =>
    this.formErrorService.hasPatternError(controlName, this.form);
  public passwordMismatchError = (): boolean =>
    this.formErrorService.hasPasswordMismatchError(this.form);
  public noTextError = (controlName: string): boolean =>
    this.formErrorService.hasRequiredError(controlName, this.form);
}
