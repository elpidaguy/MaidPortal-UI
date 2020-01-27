import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../models/Address';
import {environment} from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AddressService
 {
  address:Address;
  constructor(private http: HttpClient) { }

  //needs id
  getAddress()
   {
    return this.http.post(environment.middlewareUrl+'/address/getAddress',4).toPromise();
   }
}

