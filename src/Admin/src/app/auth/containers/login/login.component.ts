import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  message: string='';
  isAnon: boolean;
  formBuilder: FormBuilder;

  constructor(
  ) {}

  ngOnInit() {
    this.form=this.formBuilder.group({
      username: '',
      password: '',
      rememberMe: false,
    });
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
 this.authService.login(this.form.value).then(response=>{
  console.log(response);
  //to nevigate to home page as per role
  localStorage.setItem('loggedInPersonRole','propertyToset person role');
  //to remember username while session
  localStorage.setItem('loggedInPersonUsername','propertyToset person username');
  if(response)
  {
    this.message="login successfull";
  }
  else{
    this.message="Invalid email of password";
  }
  
  
 }).catch(error=>{
   console.log(error);
   this.message="Please Try later";
 });
 //put logic here to nevigate person as per admin / user/ maid home page
  this.router.navigateByUrl('/home');
  //this.router.navigate(['/home']);
  
}
}
