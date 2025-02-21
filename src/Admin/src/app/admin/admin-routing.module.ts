import { MaidManagementComponent } from './maid-management/maid-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { AuthGuard } from '@app-maidportal/auth/auth.guard';
import { MaidManagementUpdateComponent } from './maid-management-update/maid-management-update.component';

const routes: Routes = [

  { path: 'customerList', component: CustomerManagementComponent, canActivate: [AuthGuard], },
  { path: 'maid-management', component: MaidManagementComponent},

  { path: 'maid-update/:id', component: MaidManagementUpdateComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})


export class AdminRoutingModule { }
