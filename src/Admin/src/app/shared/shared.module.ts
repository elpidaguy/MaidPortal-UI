import { maidAppConfig } from './../config/app.config';
import { applicationConfiguration } from 'src/app/config/app.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AddressDisplayComponent } from './components/address-display/address-display.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AnnouncementFormComponent } from './components/announcement-form/announcement-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { ConfirmActionComponent } from './components/confirm-action/confirm-action.component';
import { GenericBrowseComponent } from './components/generic-browse/generic-browse.component';
import { ModalComponent } from './components/modal/modal.component';
import { MaidsFormComponent } from './components/maids-form/maids-form.component';
import { SearchComponent } from './components/search/search.component';
import { SortMaidsComponent } from './components/sort-maids/sort-maids.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CategoryDetailsComponent } from './containers/category-details/category-details.component';
import { DataUploadComponent } from './containers/data-upload/data-upload.component';
import { MessageBoardComponent } from './containers/message-board/message-board.component';
import { UserTableComponent } from './containers/user-table/user-table.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// ng-bootstrap modules
import {
  NgbTooltipModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbTabsetModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbAccordionModule,
  NgbModalModule,
  NgbCarouselModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AppStateService } from './services/app-state/app-state.service';
import { CustomerTableComponent } from './containers/customer-table/customer-table.component';
import { MaidTableComponent } from './containers/maid-table/maid-table.component';

@NgModule({
  declarations: [
    AddressDisplayComponent,
    AddressFormComponent,
    AnnouncementFormComponent,
    CategoryFormComponent,
    ChangePasswordFormComponent,
    ConfirmActionComponent,
    GenericBrowseComponent,
    ModalComponent,
    MaidsFormComponent,
    SearchComponent,
    SortMaidsComponent,
    UserFormComponent,
    CategoryDetailsComponent,
    DataUploadComponent,
    MessageBoardComponent,
    UserTableComponent,
    CustomerTableComponent,
    MaidTableComponent,
  ],
  imports: [
    SharedRoutingModule,
    // angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    // 3rd party UI
    FontAwesomeModule,


    /**
    * ng-bootstrap modules
    * only those that are used by app
    * should be imported to reduce bundle size
    */
    NgbDatepickerModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbTabsetModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbAccordionModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbPopoverModule,
  ],
  exports: [
    // angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // 3rd party UI
    FontAwesomeModule,

    NgbDatepickerModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbTabsetModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbAccordionModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbPopoverModule,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AppStateService,
        { provide: applicationConfiguration, useValue: maidAppConfig },
      ],
    };
  }
}
