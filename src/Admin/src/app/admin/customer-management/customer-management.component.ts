import { Component, OnInit } from '@angular/core';

import {CustomerServiceService} from 'src/app/shared/services/customer/customer-service.service';
import { Customer } from 'src/app/shared/models/Customer';
@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
customerList:Customer[];

  constructor(private customerService: CustomerServiceService) { }

  async ngOnInit() {
    const res = await this.customerService.getCustomersList();
    console.log(res);
    return this.customerList = (res as Customer[]);
   
  }

}



