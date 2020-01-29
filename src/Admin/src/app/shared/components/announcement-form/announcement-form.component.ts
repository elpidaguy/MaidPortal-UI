import { FormErrorService } from 'src/app/shared/services/form-error/form-error.service';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent implements OnInit {
  form: FormGroup;
  @Input()
  btnText: string;

  @Input()
  formType: string;
  faTimes = faTimes;

  @Input() announcement;

  // @Input()
  // set announcement(data) {
  //   if (data) {
  //     this.announcementToEdit = data;
  //     this.setEditForm();
  //   }
  // }


  @Output()
  announcementSubmitted = new EventEmitter<any>();

  constructor(
    private formErrorService: FormErrorService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit() {
    this.setNewForm();
  }

  setNewForm() {
    this.form = this.formBuilder.group(
      {
        announcement: ['', Validators.required],
      }
    );
  }

  // setEditForm() {

  //   this.form = this.formBuilder.group(
  //     {
  //       announcement: [this.announcementToEdit.title, Validators.required]
  //     }
  //   );
  // }

  submitForm() {

    if (this.form.status === 'INVALID') {
      return this.formErrorService.displayFormErrors(this.form);
    }

    const annoncementData = this.form.value;
    this.announcementSubmitted.emit(annoncementData);
    this.form.reset();
  }
}

