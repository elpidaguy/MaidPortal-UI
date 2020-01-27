import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-generic-browse',
  templateUrl: './generic-browse.component.html',
  styleUrls: ['./generic-browse.component.scss']
})
export class GenericBrowseComponent<T> {

  constructor() { }

  // Information about pagination
  @Input() meta: any;

  // @Output() search = new EventEmitter<string>();

  @Output() page = new EventEmitter<number>();

}
