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
    console.log(this.form.value);
    const add = {
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      addressName: this.form.get('addressName').value,
      email: this.form.get('email').value,
      buildingName: this.form.get('buildingName').value,
      street: this.form.get('street').value,
      city: this.form.get('city').value,
      state: this.form.get('state').value,
      pin: this.form.get('pin').value,
      country: this.form.get('country').value,
      phone: this.form.get('phone').value,
      dateCreated: new Date().getTime(),
      _isActive: true
    }
    var cust = {
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      userName: this.form.get('userName').value,
      password: this.form.get('password').value,
      aadharCardNo: this.form.get('aadharCardNo').value,
      dateCreated: new Date().getTime(),
      maritalStatus: this.form.get('maritalStatus').value,
      gender: this.form.get('gender').value,
      _isActive: true,
      address: add
    }

    //const me = this.form.value as Customer;
    //cust._isActive = true;
    this.registerService.register(cust, this.form.get('userType'));
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
