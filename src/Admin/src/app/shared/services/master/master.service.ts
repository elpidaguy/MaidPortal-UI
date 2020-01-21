import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MasterService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAnnouncements() {
    const announcement = new Promise((resolve) => {
      const announcements = [
        {
          title: 'first announcement',
        },
        {
          title: 'second announcement second announcement second announcement second announcement second announcement second announcement',
        },
        {
          title: 'third announcement',
        },
      ];

      resolve(announcements);
    });

    return announcement;
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
