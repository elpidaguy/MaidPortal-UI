import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaidListComponent } from './containers/maid-list/maid-list.component';
import { MaidDetailsComponent } from './containers/maid-details/maid-details.component';

const routes: Routes = [
  { path: '', component: MaidListComponent },
  { path: ':maidID', component: MaidDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaidRoutingModule { }
