import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-bg',
  templateUrl: './login-bg.component.html',
  styleUrls: ['./login-bg.component.scss']
})
export class LoginBgComponent implements OnInit {

  @Input() lgTitle = '';
  constructor() { }

  ngOnInit(): void {
  }

}
