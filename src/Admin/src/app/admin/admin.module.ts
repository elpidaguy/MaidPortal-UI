import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { MaidManagementComponent } from './maid-management/maid-management.component';
import { MaidManagementUpdateComponent } from './maid-management-update/maid-management-update.component';

@NgModule({
  declarations: [CustomerManagementComponent, MaidManagementComponent, MaidManagementUpdateComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
