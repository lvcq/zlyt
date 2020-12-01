import { Injectable } from '@angular/core';
import { UserInfo } from '@customTypes/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLogined = new BehaviorSubject<boolean>(false);
  public isLogined$ = this.isLogined.asObservable();
  private userInfo = new BehaviorSubject<UserInfo>(null);
  public userInfo$ = this.userInfo.asObservable();

  private logout = new BehaviorSubject<boolean>(false);
  public logout$ = this.logout.asObservable();

  constructor() { }

  public setLoginedStatus(islogined: boolean) {
    this.isLogined.next(islogined);
  }

  public setUserInfo(info: UserInfo) {
    this.userInfo.next(info);
  }

  public setLogout() {
    this.logout.next(true);
  }
}
