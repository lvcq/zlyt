import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { UserService } from '@services/user.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public username = new FormControl('', [Validators.required], [this.validateUserUnique.bind(this)]);
  public password = new FormControl('', [Validators.required]);
  public rePassword = new FormControl('', [Validators.required], [this.validateRepeatPassword]);
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      rePassword: this.rePassword
    })
  }

  validateUserUnique(username: AbstractControl) {
    if (username.value) {
      return this.userService.validateUsernameUnique(username.value)
        .pipe(map(item => item ? null : { notUnique: true }))
    }
    return of(null)
  }

  validateRepeatPassword(repwd: AbstractControl) {
    const result = repwd.value === this.password.value;
    return of(result ? null : { repeatError: true });
  }

  registerSubmit() {

  }

  getNameErrorMessage() {
    if (this.username.hasError('required')) {
      return '用户名不能为空'
    } else if (this.username.hasError('notUnique')) {
      return '用户名已存在'
    }
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return '用户密码不能为空'
    }
  }

  getRepeatPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return '';
    }
    if (this.rePassword.hasError('required') || this.rePassword.hasError('repeatError')) {
      return '两次输入密码不一致';
    }
  }

}
