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
    username: new FormControl(''),
    password: new FormControl(''),
    userType: new FormControl('customer'),
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

    this.masterService.getUserTypes().then((r) => {
      // console.log(r);
      this.userTypes = r;
    });

  }

  onSubmit() {
    console.log(this.form.value);
    const obj = {
      userName: this.form.get('username').value,
      password: this.form.get('password').value,
    }
    this.authService.login(obj, this.form.get('userType').value).then((response) => {
      // TODO: remove redundant code
      const userData = localStorage.getItem('userData');
      console.log(response);
      if (userData) {
        localStorage.setItem('userData', JSON.stringify(response));
      } else {
        localStorage.setItem('userData', JSON.stringify(response));
      }
      this.appStateService.userSubject.next(response);
      this.appStateService.isLoggedIn.next(true);
      this.toastrService.success('Login Successful!');
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.log(error);
      this.toastrService.error(error.error.text);
    });

    // this.router.navigate(['/home']);

  }
}
