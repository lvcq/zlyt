import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlRedirectService {
  private redirectUrl = '';
  private readonly indexUrl = '/space';
  private readonly loginPath = '/usr/login';
  private loginFlag = false;
  constructor(
    private router: Router
  ) { }


  setRedirectUrl(url: string) {
    this.loginFlag = true;
    this.redirectUrl = url;
  }

  goRedirectUrl() {
    if (this.loginFlag) {
      this.router.navigateByUrl(this.redirectUrl || this.indexUrl);
      this.loginFlag = false;
    }
  }

  gologinPage() {
    this.router.navigateByUrl(this.loginPath);
  }

}
