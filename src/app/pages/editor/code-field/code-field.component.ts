import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-code-field',
  templateUrl: './code-field.component.html',
  styleUrls: ['./code-field.component.scss']
})
export class CodeFieldComponent implements OnInit {

  htmlCode: string;
  cssCode: string;
  jsCode: string;
  constructor(
    private editroService: EditorService
  ) { }

  ngOnInit(): void {
  }

  handleCodeChange() {
    this.editroService.setCode({
      html: this.htmlCode,
      css: this.cssCode,
      js: this.jsCode
    })
  }

}
