import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from 'src/app/utils/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly loginPath = "/user/login"
  private readonly validateUsernamePath = 'user/validate-username-unique';

  public loginSucess$ = new BehaviorSubject<boolean>(false);
  public logoutSucess$ = new BehaviorSubject<boolean>(false);
  public userinfo$ = new BehaviorSubject<UserInfo>(null);

  constructor(
    private http: HttpClient
  ) { }

  login({ userName, password }: { userName: string; password: string }) {
    const { pwd, timestamp } = Login.cryptoPassword(userName, password);
    this.http.post(this.loginPath, {
      user_name: userName,
      password: pwd,
      timestamp
    }).subscribe(res => {
    })
  }

  validateUsernameUnique(username: string): Observable<boolean> {
    return this.http.get<any>(this.validateUsernamePath, {
      params: {
        user_name: username
      }
    }).pipe(map(res => res.data))
  }
}

export interface UserInfo {
  username: string;
}
