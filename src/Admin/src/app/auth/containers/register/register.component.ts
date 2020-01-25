import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/shared/services/form-error/form-error.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer, Gender, MaritalStatus } from 'src/app/shared/models/Customer';
import { AppConfig, applicationConfiguration } from 'src/app/config/app.config';
import { RegexService } from 'src/app/shared/services/regex/regex.service';
import { MasterService } from 'src/app/shared/services/master/master.service';
import { AppMatchFieldsValidator } from 'src/app/shared/validators/match-fields/match-fields.validator';
import { RegisterServiceService } from '@app-maidportal/auth/services/register-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userTypes: any = [];
  form: FormGroup;
  me: Customer;
  alive = true;
  gender: Gender;
  maritalStatus: MaritalStatus;
  dateCreated: Date;
  constructor(
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private router: Router,
    private regexService: RegexService,
    private masterService: MasterService,
    private registerService: RegisterServiceService,
    @Inject(applicationConfiguration) private appConfig: AppConfig
    ) { }

  ngOnInit() {
    this.setForm();
    this.masterService.getUserTypes().then((r) => {
      // console.log(r);
      this.userTypes = r;
    });
  }
  private setForm() {
    this.form = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        firstName : [
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
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.pattern(this.regexService.Phone)],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        userType: '',
        gender: ['', Validators.required ],
        //  buildingName, street, city, state, pin, country,
        buildingName: '',
        street: '',
        city: '',
        state: '',
        pin: '',
        country: '',
        maritalStatus: '',
        // SINGLE, MARRIED, WIDOWED
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
    this.registerService.register(me, this.form.get('userType'));
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
