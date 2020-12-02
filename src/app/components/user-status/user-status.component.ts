import { Component, OnDestroy, OnInit } from '@angular/core';
import { UrlRedirectService } from '@services/url-redirect.service';
import { UserService } from '@services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent implements OnInit, OnDestroy {

  public isLogined = false;
  private loginStatusSub: Subscription;
  constructor(
    private userService: UserService,
    private redirectService: UrlRedirectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginStatusMonitor();
  }

  ngOnDestroy(): void {
    if (this.loginStatusSub) {
      this.loginStatusSub.unsubscribe();
    }
  }

  private loginStatusMonitor() {
    this.loginStatusSub = this.userService.isLogined$.subscribe(res => {
      this.isLogined = res;
    })
  }

  redirectToLogin(): void {
    const current_page_url = this.router.url;
    this.redirectService.setRedirectUrl(current_page_url);
    this.router.navigateByUrl('/user/login');
  }

  logout() {
    this.userService.logout();
  }

}
