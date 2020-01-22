import { Injectable } from '@angular/core';

@Injectable()
export class MaidService {

  constructor() { }

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
