import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '@app-maidportal/shared/services/modal/modal.service';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '@app-maidportal/shared/services/master/master.service';
@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  createModalID = 'CreateAnnouncementModal';
  selectedAnnouncement: any;
  selectedIndex: number;
  showAnnouncements = false;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;
  confirmModalID = 'messageconfirmmodal';
  messageIdToDelete: any;
  message: string;
  announcements: any;
  constructor(
    private modalService: ModalService,
    private toastrService: ToastrService,
    private masterService: MasterService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.masterService.getAnnouncements().then((x) => {
      // console.log(x);
      this.announcements = x || [];
      this.showAnnouncements = true;
    });
  }

  openCreateModal() {
    this.modalService.open(this.createModalID);
  }

  addNewAnnouncement(event) {
    const obj = { title: event.announcement };
    this.masterService.addAnnouncement(obj);
    this.toastrService.success('Announcement added successfully!');
    this.modalService.close(this.createModalID);
    this.loadData();
  }

  deleteAnnouncement(i) {
    this.masterService.deleteAnnouncement(i);
    this.toastrService.success('Announcement deleted successfully!');
    this.loadData();
  }

  confirmDeleteAnnouncement(messageId: string, messageString: string) {
    this.messageIdToDelete = messageId;
    this.message = "Are you sure you want to delete Announcement - '<b>" + messageString + "</b>'?";
    this.modalService.open(this.confirmModalID);
  }

  afterconfirm(data) {
    if (data === 'yes') {
      this.deleteAnnouncement(this.messageIdToDelete);
    }
    this.modalService.close(this.confirmModalID);
  }
}
