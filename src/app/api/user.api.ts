import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from 'src/app/utils/login';
import { ResponseWithCode } from '@customTypes/http';

@Injectable({
    providedIn: 'root'
})
export class UserAPI {

    private readonly loginPath = "/user/login"
    private readonly registerPath = '/user/register';
    private readonly validateUsernamePath = '/user/username_exists';


    public loginSucess$ = new BehaviorSubject<boolean>(false);
    public logoutSucess$ = new BehaviorSubject<boolean>(false);
    public userinfo$ = new BehaviorSubject<UserInfo>(null);

    constructor(
        private http: HttpClient
    ) { }

    login({ userName, password }: { userName: string; password: string }) {
        const { pwd, timestamp } = Login.cryptoPassword(userName, password);
        this.http.post<ResponseWithCode<UserInfo>>(this.loginPath, {
            user_name: userName,
            password: pwd,
            timestamp
        }).subscribe(res => {
            if (res && res.code === 20000) {
                this.loginSucess$.next(true);
                this.userinfo$.next(res.data);
            }
        })
    }

    register(username: string, password: string) {
        this.http.post<ResponseWithCode<UserInfo>>(this.registerPath, {
            username,
            password
        }).subscribe(res => {
            if (res && res.code === 20000) {
                this.loginSucess$.next(true);
                this.userinfo$.next(res.data);
            }
        })
    }

    validateUsernameUnique(username: string): Observable<boolean> {
        return this.http.get<ResponseWithCode<boolean>>(this.validateUsernamePath, {
            params: {
                username
            }
        }).pipe(map(res => !res.data))
    }
}

export interface UserInfo {
    username: string;
}
