import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
 customer: Customer;
  constructor(private http: HttpClient) { }
  getCustomersList() {
    return this.http.get('http://localhost:8080/customer/getAllCustomers' );
  }
}
