import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class AppStateService {
  // Documentation on BehaviorSubject - http://reactivex.io/rxjs/manual/overview.html#behaviorsubject
  public isLoggedIn: BehaviorSubject<boolean>;
  public userSubject: BehaviorSubject<any>;

  constructor() {
    // This will not control access to routes or API features, it is purely for display rules.
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
    this.userSubject = new BehaviorSubject<any>(null);

  }
}
