import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isAnon:boolean;
  formBuilder: FormBuilder;

  constructor() {
    
   }

  ngOnInit() {
    this.form=this.formBuilder.group({
      username: '',
      password: '',
      rememberMe: false,
    });
  }

onSubmit(){
  
}
}
