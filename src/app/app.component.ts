import { Component, OnInit } from '@angular/core';
import { HttpAbnormalService } from '@services/http-abnormal.service';
import { UserAPI } from '@api/user.api';
import { UrlRedirectService } from '@services/url-redirect.service';
import { Router } from '@angular/router';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private httpAbnormalService: HttpAbnormalService,
    private userService: UserAPI,
    private urlRedirectService: UrlRedirectService,
    private router: Router,
    private themeService: ThemeService
  ) {

  }

  ngOnInit(): void {
    
    this.httpAbnormalSub();
    this.userSub();
  }

  private httpAbnormalSub() {
    this.httpAbnormalService.sessionExpired$.subscribe(() => {
      const currentUrl = this.router.url;
      this.urlRedirectService.setRedirectUrl(currentUrl);
      this.urlRedirectService.gologinPage();
    })
  }

  private userSub() {
    this.userService.loginSucess$.subscribe(res => {
      if (res) {
        this.urlRedirectService.goRedirectUrl();
      }
    })
  }
}
