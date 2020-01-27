import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '@app-maidportal/auth/auth.guard';
import { AddressDisplayComponent } from '@app-maidportal/shared/components/address-display/address-display.component';


const routes: Routes = [
  { path: 'profile/details', component: ProfileComponent },
  { path: 'profile/addresses', component: AddressDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
