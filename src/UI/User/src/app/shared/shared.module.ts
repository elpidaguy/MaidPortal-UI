import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [AddressDisplayComponent, AddressFormComponent, AnnouncementFormComponent, CategoryFormComponent, ChangePasswordFormComponent, ConfirmActionComponent, GenericBrowseComponent, ModalComponent, MaidsFormComponent, SearchComponent, SortMaidsComponent, UserFormComponent, CategoryDetailsComponent, DataUploadComponent, MessageBoardComponent, UserTableComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
