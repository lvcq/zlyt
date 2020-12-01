import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatusComponent } from './user-status.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserStatusComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    UserStatusComponent
  ]
})
export class UserStatusModule { }
