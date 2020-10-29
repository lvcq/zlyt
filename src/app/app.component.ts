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

  private themeContainer: HTMLLinkElement;

  constructor(
    private httpAbnormalService: HttpAbnormalService,
    private userService: UserAPI,
    private urlRedirectService: UrlRedirectService,
    private router: Router,
    private themeService: ThemeService
  ) {

  }

  ngOnInit(): void {
    this.themeContainer = document.querySelector("#themeStyle");
    this.httpAbnormalSub();
    this.userSub();
    this.themeSub();
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

  private themeSub() {
    this.themeService.currentTheme$.subscribe(theme => {
      if (theme) {
        if (this.themeContainer) {
          this.themeContainer.setAttribute('href', theme.path);
        }
      }
    })
  }
}
