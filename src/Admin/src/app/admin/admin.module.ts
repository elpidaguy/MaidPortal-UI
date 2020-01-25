import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { MaidManagementComponent } from './maid-management/maid-management.component';

@NgModule({
  declarations: [CustomerManagementComponent, MaidManagementComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
