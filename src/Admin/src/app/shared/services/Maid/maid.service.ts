import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Maid } from '../../models/Maid';

@Injectable({
  providedIn:'root'
})
export class MaidService {
maid:Maid
  constructor(private http:HttpClient) { }

  getMaidsList(){
   // return this.http.get(environment.middlewareUrl+'/maid/getAllMaids').toPromise();
   return this.http.get(environment.middlewareUrl+'/maid/getAllMaidList').toPromise();
  }
  deleteMaid(maid:Object) {
    return this.http.post(environment.middlewareUrl+'/admin/deleteMaid',maid).toPromise();
  }
  // onUpdateMaid(maid){
    
  // }

  

  getAllMaids() {
    const listMaids = new Promise((resolve) => {
      const maidList = {
        Meta: {
          Page: 1,
          PageSize: 5,
          TotalCount: 10,
          TotalPages: 2,
          ItemRange: [
            1,
            5
          ]
        },
        Items: [
          {
            id: 1,
            firstName: 'test',
            lastName: 'foraddress',
            userName: 'exabytes',
            email: 'kaustubh_joshi@archway.c',
            phone: '7347132000',
            password: 'qwerty',
            imgUrl: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
            aadharCardNo: '121212121212',
            salary: 5000.0,
            _isActive: true,
            dateCreated: '2020-01-22',
            maritalStatus: 'SINGLE',
            gender: 'MALE',
            feedback: null
          },
          {
            id: 2,
            firstName: 'test',
            lastName: 'foraddress',
            userName: 'exabytes',
            email: 'kaustubh_joshi@archway.c',
            phone: '7347132000',
            password: 'qwerty',
            imgUrl: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
            aadharCardNo: '121212121212',
            salary: 5000.0,
            _isActive: true,
            dateCreated: '2020-01-22',
            maritalStatus: 'SINGLE',
            gender: 'MALE',
            feedback: null
          },
          {
            id: 3,
            firstName: 'test',
            lastName: 'foraddress',
            userName: 'exabytes',
            email: 'kaustubh_joshi@archway.c',
            phone: '7347132000',
            password: 'qwerty',
            imgUrl: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
            aadharCardNo: '121212121212',
            salary: 5000.0,
            _isActive: true,
            dateCreated: '2020-01-22',
            maritalStatus: 'SINGLE',
            gender: 'MALE',
            feedback: null
          },
          {
            id: 4,
            firstName: 'test',
            lastName: 'foraddress',
            userName: 'exabytes',
            email: 'kaustubh_joshi@archway.c',
            phone: '7347132000',
            password: 'qwerty',
            imgUrl: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
            aadharCardNo: '121212121212',
            salary: 5000.0,
            _isActive: true,
            dateCreated: '2020-01-22',
            maritalStatus: 'SINGLE',
            gender: 'MALE',
            feedback: null
          },
          {
            id: 5,
            firstName: 'test',
            lastName: 'foraddress',
            userName: 'exabytes',
            email: 'kaustubh_joshi@archway.c',
            phone: '7347132000',
            password: 'qwerty',
            imgUrl: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
            aadharCardNo: '121212121212',
            salary: 5000.0,
            _isActive: true,
            dateCreated: '2020-01-22',
            maritalStatus: 'SINGLE',
            gender: 'MALE',
            feedback: null
          },
        ]
      };

      resolve(maidList);
    });

    return listMaids;
  }

}
