import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserAPI } from '@api/user.api';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public username = new FormControl('', [Validators.required], [this.validateUserUnique()]);
  public password = new FormControl('', [Validators.required]);
  public rePassword = new FormControl('',
    [Validators.required],
    [(repwd: AbstractControl) => {
      return this.validateRepeatPassword(repwd)
    }]);
  constructor(
    private fb: FormBuilder,
    private userService: UserAPI
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      rePassword: this.rePassword
    })

  }

  validateUserUnique(): AsyncValidatorFn {
    return (control: FormControl): Observable<ValidationErrors | null> => {
      return control.valueChanges.pipe(
        distinctUntilChanged(),
        debounceTime(400),
        switchMap(() => this.userService.validateUsernameUnique(control.value)),
        map(res => res ? null : { duplicate: true }),
        first()
      );
    }
  }

  validateRepeatPassword(repwd: AbstractControl) {
    const result = repwd.value === this.password.value;
    return of(result ? null : { repeatError: true });
  }

  registerSubmit() {
    this.validForm().subscribe(() => {
      if (this.registerForm.valid) {
        this.userService.register(this.username.value, this.password.value);
      }
    })
  }

  getNameErrorMessage() {
    if (this.username.hasError('required')) {
      return '用户名不能为空'
    } else if (this.username.hasError('duplicate')) {
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

  private validForm(): Observable<any> {
    this.username.markAsDirty();
    this.username.updateValueAndValidity();
    this.password.markAsDirty();
    this.password.updateValueAndValidity();
    this.rePassword.markAsDirty();
    this.rePassword.updateValueAndValidity();
    return this.registerForm.statusChanges.pipe(first())
  }

}
