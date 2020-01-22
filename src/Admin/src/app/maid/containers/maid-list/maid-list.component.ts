import { Component, OnInit } from '@angular/core';
import { faList as _falist } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify as _faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faTh as _faTh } from '@fortawesome/free-solid-svg-icons';
import { MaidService } from '@app-maidportal/shared/services/Maid/maid.service';

@Component({
  selector: 'app-maid-list',
  templateUrl: './maid-list.component.html',
  styleUrls: ['./maid-list.component.scss']
})
export class MaidListComponent implements OnInit {

  maidList: any;
  currentDisplay: string;
  faList = _falist;
  faAlignJustify = _faAlignJustify;
  faTh = _faTh;
  show = false;

  constructor(
    private maidService: MaidService,
  ) {
    this.currentDisplay = 'Grid';
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.maidService.getAllMaids().then((res) => {
      console.log(res);
      // this.maidList = Object.assign({}, res);
      // Object.assign(this.maidList, { Meta: res['Meta'], Items: res['Items'] });
      this.maidList = res;
    }).catch((error) => {
      console.log(error);
    });
    console.log(this.maidList);
    this.show = true;
  }

  onDisplayChange(display: string) {
    this.currentDisplay = display;
  }

}
