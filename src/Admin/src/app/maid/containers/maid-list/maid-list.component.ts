import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maid-list',
  templateUrl: './maid-list.component.html',
  styleUrls: ['./maid-list.component.scss']
})
export class MaidListComponent implements OnInit {

  currentDisplay: string;

  constructor() {
    this.currentDisplay = 'List';
   }

  ngOnInit() {
  }

}
