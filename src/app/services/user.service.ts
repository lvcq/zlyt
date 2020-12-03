import { Injectable } from '@angular/core';
import { UserAPI } from '@api/user.api';
import { ResponseWithCode } from '@customTypes/http';
import { UserInfo } from '@customTypes/user';
import { Login } from '@utils/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLogined = new BehaviorSubject<boolean>(false);
  public isLogined$ = this.isLogined.asObservable();
  private userInfo = new BehaviorSubject<UserInfo>(null);
  public userInfo$ = this.userInfo.asObservable();

  private logoutSucess = new BehaviorSubject<boolean>(false);
  public logoutSucess$ = this.logoutSucess.asObservable();

  constructor(
    private userApi: UserAPI
  ) { }

  public login({ username, password }: { username: string; password: string }): Observable<{ status: boolean; msg?: string; }> {
    const { pwd, timestamp } = Login.cryptoPassword(username, password);
    return this.userApi.login({
      username,
      password: pwd,
      timestamp
    }).pipe(map(res => this.handleLoginOrRegisterResponse(res)))
  }

  public getUserinfo(): Observable<{ status: boolean; msg?: string; }> {
    return this.userApi.userinfo()
      .pipe(map(res => this.handleLoginOrRegisterResponse(res)))
  }

  public register({ username, password }: { username: string; password: string }): Observable<{ status: boolean; msg?: string; }> {
    return this.userApi.register(username, password)
      .pipe(map(res => this.handleLoginOrRegisterResponse(res)))
  }

  private handleLoginOrRegisterResponse(res: ResponseWithCode<UserInfo>): { status: boolean; msg?: string; } {
    if (res.code === 20000) {
      this.isLogined.next(true);
      this.userInfo.next(res.data);
      return { status: true };
    }
    return { status: false, msg: res.message };
  }

  public logout() {
    this.userApi.logout().subscribe(res => {
      if (res.data) {
        this.isLogined.next(false);
        this.userInfo.next(null);
      }
      this.logoutSucess.next(res.data);
    })
  }
}
