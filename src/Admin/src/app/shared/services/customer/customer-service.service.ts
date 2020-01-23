import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../../models/Customer';
import {environment} from 'src/environments/environment'



@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
 customer: Customer;
  constructor(private http: HttpClient) { }
  getCustomersList() {
    return this.http.get(environment.middlewareUrl+'/customer/getAllCustomers').toPromise();
  }
  deleteCustomer(customer:Object) {
    return this.http.post(environment.middlewareUrl+'/admin/deleteCustomer',customer).toPromise();
  }
}
