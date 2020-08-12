import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-field',
  templateUrl: './code-field.component.html',
  styleUrls: ['./code-field.component.scss']
})
export class CodeFieldComponent implements OnInit {

  htmlCode: string;
  cssCode: string;
  jsCode: string;
  constructor() { }

  ngOnInit(): void {
  }

}
