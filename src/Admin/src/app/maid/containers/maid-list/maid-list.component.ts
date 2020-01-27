import { Component, OnInit } from '@angular/core';
import { faList as _falist } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify as _faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faTh as _faTh } from '@fortawesome/free-solid-svg-icons';
import { MaidService } from '@app-maidportal/shared/services/Maid/maid.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, flatMap, map } from 'rxjs/operators';
import { isEmpty, each } from 'lodash';


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
  displayPageSize: number;
  hasQueryParams = false;
  searchTerm = null;


  constructor(
    private maidService: MaidService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.currentDisplay = 'Table';
  }

  ngOnInit() {

    this.getMaidData().subscribe((data) => {
      console.log(data);
      this.maidList = data;
      this.show = true;
    });
    // this.loadData();
    this.configureRouter();

  }

  getMaidData(): Observable<any> {
    return this.activatedRoute.queryParams.pipe(
      tap((queryParams) => {
        this.hasQueryParams = !isEmpty(queryParams);
        this.searchTerm = queryParams.search || null;
      }),
      flatMap((queryParams) => {
        return this.maidService
          .getAllMaids({
            page: queryParams.page,
            pageSize: queryParams.pageSize,
            // search: queryParams.search,
            // sortBy: queryParams.sortBy,
          })
          .pipe(
            map((maidList) => {
              return maidList;
            }));
      })
    );
  }

  onDisplayChange(display: string) {
    this.currentDisplay = display;
  }

  changeDisplayFilter(display: number): void {
    this.addQueryParam({ pageSize: display, page: 1 });
    this.displayPageSize = display;
  }

  changePage(page: number): void {
    this.addQueryParam({ page });
  }

  private addQueryParam(newParam: object): void {
    const queryParams = {
      ...this.activatedRoute.snapshot.queryParams,
      ...newParam,
    };
    this.router.navigate([], { queryParams });
  }

  configureRouter() {
    /**
     *
     * override angular's default routing behavior so that
     * going to the same route with different query params are
     * detected as a state change. This fixes bug where >2 query
     * params of the same type aren't recognized
     *
     */
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

}
