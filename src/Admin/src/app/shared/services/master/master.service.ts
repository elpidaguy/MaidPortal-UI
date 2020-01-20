import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MasterService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUserTypes() {
    const listUserTypes = new Promise((resolve) => {
        const userTypes = [
          {id: 'customer', value: 'Customer'},
          {id: 'maid', value: 'Maid'},
          {id: 'admin', value: 'Admin'}
        ];

        // console.log(userTypes);

        resolve(userTypes);
    });

    return listUserTypes;
}
}
