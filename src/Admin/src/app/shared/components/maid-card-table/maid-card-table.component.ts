import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maid-card-table',
  templateUrl: './maid-card-table.component.html',
  styleUrls: ['./maid-card-table.component.scss']
})
export class MaidCardTableComponent implements OnInit {
  @Input() maid: any;

  constructor() { }

  ngOnInit() {
  }

}
