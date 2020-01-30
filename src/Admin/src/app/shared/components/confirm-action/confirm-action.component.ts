import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'confirm-action',
  templateUrl: './confirm-action.component.html'
})
export class ConfirmActionComponent implements OnInit {

  @Input() message;
  @Output()
  afterconfirm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submit(action) {
    this.afterconfirm.emit(action);
  }
}
