import { NgModule } from '@angular/core';
import { MaidListComponent } from './containers/maid-list/maid-list.component';
import { MaidDetailsComponent } from './containers/maid-details/maid-details.component';
import { SharedModule } from '../shared/shared.module';
import { MaidRoutingModule } from './maid-routing.module';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { DisplayFilterComponent } from './components/display-filter/display-filter.component';



@NgModule({
  imports: [
    SharedModule,
    MaidRoutingModule,
    TreeModule,
    FormsModule,
  ],
  declarations: [
    MaidListComponent,
    MaidDetailsComponent,
    DisplayFilterComponent
  ],
})
export class MaidModule { }
