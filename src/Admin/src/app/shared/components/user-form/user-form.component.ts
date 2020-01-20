import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form = new FormGroup({
    //user details
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userType: new FormControl(''),
    userName: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
    maritalStatus:new FormControl(''),
    imgUrl:new FormControl(''),
    aadharCardNo:new FormControl(''),
    gender:new FormControl(''),
    address:new FormControl(''),

    //maid details
    // firstName: new FormControl(''),
    // lastName: new FormControl(''),
    // userType: new FormControl(''),
    // userName: new FormControl(''),
    // email:new FormControl(''),
    // password:new FormControl('');
    // phone:new FormControl(''),
    // maritalStatus:new FormControl(''),
    // imgUrl:new FormControl(''),
    // aadharCardNo:new FormControl(''),
    // gender:new FormControl(''),
    salary:new FormControl('')
   



  });
  constructor() { }

  ngOnInit() {
  }

}
