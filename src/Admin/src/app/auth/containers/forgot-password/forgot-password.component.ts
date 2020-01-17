import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetEmailForm = new FormGroup({
    email: new FormControl('')
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.resetEmailForm = this.formBuilder.group({ email: '' });
  }

  onSubmit(){
    console.log(this.resetEmailForm.value);
    
  }
}
