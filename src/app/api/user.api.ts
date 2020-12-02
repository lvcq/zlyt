import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from 'src/app/utils/login';
import { ResponseWithCode } from '@customTypes/http';
import { UserInfo } from '@customTypes/user';

@Injectable({
    providedIn: 'root'
})
export class UserAPI {

    private readonly loginPath = "/zlyt/user/login"
    private readonly registerPath = '/zlyt/user/register';
    private readonly validateUsernamePath = '/zlyt/user/username_exists';
    private readonly userinfoPath= "/zlyt/user/userinfo";
    private readonly logoutPath = "/zlyt/user/logout";

    constructor(
        private http: HttpClient
    ) { }

    login({ username, password, timestamp }: { username: string; password: string, timestamp: number }) {
        return this.http.post<ResponseWithCode<UserInfo>>(this.loginPath, {
            user_name: username,
            password,
            timestamp
        })
    }

    register(username: string, password: string) {
        return this.http.post<ResponseWithCode<UserInfo>>(this.registerPath, {
            username,
            password
        });
    }

    validateUsernameUnique(username: string): Observable<boolean> {
        return this.http.get<ResponseWithCode<boolean>>(this.validateUsernamePath, {
            params: {
                username
            }
        }).pipe(map(res => !res.data));
    }

    userinfo(){
        return this.http.get<ResponseWithCode<UserInfo>>(this.userinfoPath);
    }

    logout(){
        return this.http.get<ResponseWithCode<boolean>>(this.logoutPath);
    }
}


