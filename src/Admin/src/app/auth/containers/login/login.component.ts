import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppAuthService } from '../../services/app-auth.service';
import { applicationConfiguration, AppConfig } from 'src/app/config/app.config';
import { Customer } from 'src/app/shared/models/Customer';
import { ToastrService } from 'ngx-toastr';
import { AppStateService } from 'src/app/shared/services/app-state/app-state.service';
import { MasterService } from 'src/app/shared/services/master/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userTypes: any = [];

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    userType: new FormControl(''),
  });



  constructor(
    private authService: AppAuthService,
    private router: Router,
    private toastrService: ToastrService,
    private appStateService: AppStateService,
    private masterService: MasterService,
    @Inject(applicationConfiguration) private appConfig: AppConfig
  ) {

  }

  ngOnInit() {
    if (this.appStateService.isLoggedIn.value) {
      this.router.navigateByUrl('/home');
    }

    this.masterService.getUserTypes().then((r) => {
      this.userTypes = r;
    });

  }

  onSubmit() {
    const obj = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      userType: this.form.get('userType').value.toString().toUpperCase(),
    };

    this.authService.login(obj).then((response) => {
      localStorage.setItem('userData', JSON.stringify(response));
      localStorage.setItem('userType', JSON.stringify(obj.userType));
      this.appStateService.userSubject.next(response);
      this.appStateService.isLoggedIn.next(true);
      this.appStateService.userType.next(obj.userType);
      this.toastrService.success('Login Successful!', '', { timeOut: 1000 });
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.log(error);
      this.toastrService.error(error.error.text);
    });

  }
}
