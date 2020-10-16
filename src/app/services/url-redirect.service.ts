import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlRedirectService {
  private redirectUrl = '';
  private readonly indexUrl = '/editor';
  private readonly loginPath = '/usr/login';
  constructor(
    private router: Router
  ) { }


  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  goRedirectUrl() {
    this.router.navigateByUrl(this.redirectUrl || this.indexUrl);
  }

  gologinPage() {
    this.router.navigateByUrl(this.loginPath);
  }

}
