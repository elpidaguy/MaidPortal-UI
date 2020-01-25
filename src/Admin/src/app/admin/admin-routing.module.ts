import { MaidManagementComponent } from './maid-management/maid-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//admin componenets

import { CustomerManagementComponent } from './customer-management/customer-management.component';

const routes: Routes = [

  { path: 'customerList', component: CustomerManagementComponent },
  { path: 'maid-management', component: MaidManagementComponent},
  { path: 'customer-management', component: CustomerManagementComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})


export class AdminRoutingModule { }
