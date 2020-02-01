import { Component, OnInit } from '@angular/core';
import { AddressService } from '@app-maidportal/shared/services/address.service';
import { Address } from '@app-maidportal/shared/models/Address';
@Component({
  selector: 'app-address-display',
  templateUrl: './address-display.component.html',
  styleUrls: ['./address-display.component.scss']
})

export class AddressDisplayComponent implements OnInit {
  address:Address[];
  addr: Address[];

  constructor(private addressService: AddressService) { }

  async ngOnInit() {
    this.addressService.getAddress().then(response=>{
      console.log(response);
    }).catch(error=>{
      console.log(error);
    });
  }
}



