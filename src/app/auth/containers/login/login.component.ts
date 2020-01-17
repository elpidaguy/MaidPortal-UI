import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppAuthService } from '../../services/app-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false)
  });
  

  constructor(private authService:AppAuthService,
    private router: Router,
    private formBuilder: FormBuilder
    // @Inject(applicationConfiguration) private appConfig: AppConfig
    ) {
    
   }

  ngOnInit() {
    
  }

onSubmit(){
  console.log(this.form.value);
  /* suleman sir code
  this.authService.singIn(this.form.value).then(response=>{
   console.log(response);
  }).catch(error=>{
    console.log(error);
  });
  */

 this.router.navigateByUrl('/home');
  
}
}
