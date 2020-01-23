import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaidListComponent } from './containers/maid-list/maid-list.component';
import { MaidDetailsComponent } from './containers/maid-details/maid-details.component';
import { AuthGuard } from '@app-maidportal/auth/auth.guard';

const routes: Routes = [
  { path: '',
  component: MaidListComponent,
  canActivate: [AuthGuard],
 },
  { path: ':maidID',
  component: MaidDetailsComponent,
  canActivate: [AuthGuard],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaidRoutingModule { }
