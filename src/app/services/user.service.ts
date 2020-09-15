import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/utils/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly loginPath = "/user/login"
  constructor(
    private http: HttpClient
  ) { }

  login({ userName, password }: { userName: string; password: string }) {
    const { pwd, timestamp } = Login.cryptoPassword(userName, password);
    this.http.post(this.loginPath, {
      user_name: userName,
      password: pwd,
      timestamp
    }).subscribe(res=>{
      console.log(res);
    })
  }
}
