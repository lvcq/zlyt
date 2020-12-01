import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent implements OnInit,OnDestroy {

  public isLogined = false;
  private loginStatusSub: Subscription;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginStatusMonitor();
  }

  ngOnDestroy():void{
    if(this.loginStatusSub){
      this.loginStatusSub.unsubscribe();
    }
  }

  private loginStatusMonitor() {
    this.loginStatusSub = this.userService.isLogined$.subscribe(res => {
      this.isLogined = res;
    })
  }

}
