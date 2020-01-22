import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maid-card',
  templateUrl: './maid-card.component.html',
  styleUrls: ['./maid-card.component.scss']
})
export class MaidCardComponent implements OnInit {

  @Input() maid: any;

  constructor() { }

  ngOnInit() {
  }

}
