import { AfterContentInit, Component, OnInit } from '@angular/core';
import { HttpAbnormalService } from '@services/http-abnormal.service';
import { UrlRedirectService } from '@services/url-redirect.service';
import { Router } from '@angular/router';
import { ThemeService } from '@services/theme.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {


  constructor(
    private httpAbnormalService: HttpAbnormalService,
    private userService: UserService,
    private urlRedirectService: UrlRedirectService,
    private router: Router,
    private themeService: ThemeService,
  ) {

  }

  ngOnInit(): void {
    this.httpAbnormalSub();
    this.themeService.setThemeContainer(document.querySelector("#themeStyle"));
    this.userSub();
  }

  ngAfterContentInit(): void {

    this.userService.getUserinfo().subscribe(res => {
      if (!res.status) {
        console.log(res.msg);
      }
    });
  }

  private httpAbnormalSub() {
    this.httpAbnormalService.sessionExpired$.subscribe(() => {
      const currentUrl = this.router.url;
      this.urlRedirectService.setRedirectUrl(currentUrl);
      this.urlRedirectService.gologinPage();
    })
  }

  private userSub() {
    this.userService.isLogined$.subscribe(res => {
      if (res) {
        this.urlRedirectService.goRedirectUrl();
      }
    })
  }
}
