import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CustomerServiceService} from 'src/app/shared/services/customer/customer-service.service';
import { Customer } from 'src/app/shared/models/Customer';
@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  customer$: Observable<Customer[]>;

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
  // let obj: Customer= JSON.parse(this.customerService.getCustomersList());
}


}
