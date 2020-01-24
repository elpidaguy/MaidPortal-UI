import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
//admin componenets

import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { MaidManagementComponent } from './maid-management/maid-management.component';
const routes: Routes = [
  { path: 'maidList', component: MaidManagementComponent},
  { path: 'customerList', component: CustomerManagementComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})


export class AdminRoutingModule { }
