import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAPI } from '@api/user.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public userName = new FormControl("", Validators.required);
  public password = new FormControl("", Validators.required);

  constructor(
    private userService: UserAPI
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  getNameErrorMessage() {
    if (this.userName.hasError('required')) {
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
      this.userService.login(this.loginForm.value)
    }
  }

  private validForm() {
    this.userName.markAsDirty();
    this.userName.updateValueAndValidity();
    this.password.markAsDirty();
    this.password.updateValueAndValidity();
  }

}
