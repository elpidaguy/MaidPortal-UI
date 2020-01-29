import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '@app-maidportal/shared/services/modal/modal.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  createModalID = 'CreateAnnouncementModal';
  editModalID = 'EditAnnouncementModal';
  selectedAnnouncement: any;
  selectedIndex: number;
  showAnnouncements = false;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;
  confirmModalID = 'messageconfirmmodal';
  messageIdToDelete: any;
  message: string;
  constructor(
    private modalService: ModalService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    // this.ocBuyerService.Get(this.appConfig.buyerID).subscribe((x) => {
    //   this.buyer = x;
    //   this.buyer.xp = (this.buyer.xp) || [];
    //   this.buyer.xp.announcements = (this.buyer.xp && this.buyer.xp.announcements) || [];
    //   this.showAnnouncements = true;
    // });
  }

  openCreateModal() {
    this.modalService.open(this.createModalID);
  }

  // openEditModal(index) {
  //   this.selectedIndex = index;
  //   this.selectedAnnouncement = this.buyer.xp.announcements[index];
  //   this.modalService.open(this.editModalID);
  // }

  saveAnnouncements() {
    // TODO: yet to implement
    // const partialBuyer = {
    //   xp: { announcements: this.buyer.xp.announcements },
    // };

    // this.ocBuyerService
    //   .Patch(this.appConfig.buyerID, partialBuyer)
    //   .subscribe((x) => {
    //     this.buyer = x;
    //   });
  }

  // addNewAnnouncement(event) {
  //   this.buyer.xp.announcements.push({ "title": event.announcement, "order": event.order, "StartDate": event.StartDate ? new Date(event.StartDate) : null, "ExpiryDate": event.ExpiryDate ? new Date(event.ExpiryDate) : null, "UserGroups": event.UserGroups });
  //   this.saveAnnouncements();
  //   this.toastrService.success("Announcement added successfully!");
  //   this.modalService.close(this.createModalID);
  // }

  // deleteAnnouncement(i) {
  //   this.buyer.xp.announcements.splice(i, 1);
  //   this.saveAnnouncements();
  //   this.toastrService.success("Announcement deleted successfully!");
  // }

  // saveEditedAnnouncement(event) {
  //   this.buyer.xp.announcements[this.selectedIndex] = { "title": event.announcement, "order": event.order, "StartDate": event.StartDate ? new Date(event.StartDate) : null, "ExpiryDate": event.ExpiryDate ? new Date(event.ExpiryDate) : null, "UserGroups": event.UserGroups };
  //   this.saveAnnouncements();
  //   this.toastrService.success("Announcement saved successfully!");
  //   this.modalService.close(this.editModalID);

  // }

  confirmDeleteAnnouncement(messageId: string, messageString: string) {
    this.messageIdToDelete = messageId;
    this.message = "Are you sure you want to delete Announcement - '<b>" + messageString + "</b>'?";
    this.modalService.open(this.confirmModalID);
  }

  // afterconfirm(data) {
  //   if (data === "yes") {
  //     this.deleteAnnouncement(this.messageIdToDelete);
  //   }
  //   this.modalService.close(this.confirmModalID);
  // }
}
