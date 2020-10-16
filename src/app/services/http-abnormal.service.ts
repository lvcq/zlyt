import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpAbnormalService {


  private sessionExpired = new Subject();

  public sessionExpired$ = this.sessionExpired.asObservable().pipe(throttleTime(3000));

  constructor() {
  }

  setSessionExpired() {
    this.sessionExpired.next(null);
  }

}
