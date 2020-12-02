import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public username = new FormControl("", Validators.required);
  public password = new FormControl("", Validators.required);

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  getNameErrorMessage() {
    if (this.username.hasError('required')) {
      return '用户名不能为空'
    }
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return '用户密码不能为空'
    }
  }

  loginSubmit() {
    this.validForm();
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(res => {
        if (!res.status) {
          this.snackBar.open(res.msg, null, {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration:3000
          })
        }
      })
    }
  }

  private validForm() {
    this.username.markAsDirty();
    this.username.updateValueAndValidity();
    this.password.markAsDirty();
    this.password.updateValueAndValidity();
  }

}
