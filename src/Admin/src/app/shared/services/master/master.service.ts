import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, applicationConfiguration } from '@app-maidportal/config/app.config';

@Injectable()
export class MasterService {

  constructor(
    private httpClient: HttpClient,
    @Inject(applicationConfiguration) private appConfig: AppConfig
  ) { }


  // announcement services

  getAnnouncements() {
    const url = `${this.appConfig.middlewareUrl}/announcement/getAllAnnouncement`;
    return this.httpClient.get(url).toPromise();
  }

  addAnnouncement(data: any) {
    const url = `${this.appConfig.middlewareUrl}/announcement/addAnnouncement`;
    return this.httpClient.post(url, data, { responseType: 'text' }).toPromise();
  }

  deleteAnnouncement(i: any) {
    const obj = { id: i };
    const url = `${this.appConfig.middlewareUrl}/announcement/deleteAnnouncement`;
    return this.httpClient.post(url, obj, { responseType: 'text' }).toPromise();
  }


  getCarouselSlides() {

    const carouselSlide = new Promise((resolve) => {
      const carouselSlides = [
        {
          URL: '/assets/carousel1.jpg',
          headerText: 'Clothing',
          bodyText: 'We provide Clothing'
        },
        {
          URL: '/assets/carousel2.jpg',
          headerText: 'Cooking',
          bodyText: 'We provide Cooking'
        },
        {
          URL: '/assets/carousel3.jpg',
          headerText: 'Cleaning',
          bodyText: 'We also provide cleaning'
        },
      ];

      // console.log(userTypes);

      resolve(carouselSlides);
    });

    return carouselSlide;
  }

  getUserTypes() {
    const listUserTypes = new Promise((resolve) => {
      const userTypes = [
        { id: 'customer', value: 'Customer' },
        { id: 'maid', value: 'Maid' },
        { id: 'admin', value: 'Admin' }
      ];

      // console.log(userTypes);

      resolve(userTypes);
    });

    return listUserTypes;
  }
}
