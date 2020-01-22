import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maid-card-list',
  templateUrl: './maid-card-list.component.html',
  styleUrls: ['./maid-card-list.component.scss']
})
export class MaidCardListComponent implements OnInit {
  @Input() maid: any;

  constructor() { }

  ngOnInit() {
  }

}
