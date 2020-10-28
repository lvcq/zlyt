import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-code-field',
  templateUrl: './code-field.component.html',
  styleUrls: ['./code-field.component.scss']
})
export class CodeFieldComponent implements OnInit {

  public htmlCode: string;
  public cssCode: string;
  public jsCode: string;
  public previewCode = {
    html: '',
    js: '',
    css: ''
  };
  private codeChagne$ = new Subject();

  constructor(
    private editroService: EditorService
  ) { }

  ngOnInit(): void {
    this.codeMonitor();
    this.codeChagne$.pipe(debounceTime(500)).subscribe(() => {
      this.previewCode = {
        html: this.htmlCode,
        css: this.cssCode,
        js: this.jsCode
      }
    })
  }

  handleCodeChange() {
    this.editroService.setCode({
      html: this.htmlCode,
      css: this.cssCode,
      js: this.jsCode
    })
    this.codeChagne$.next();
  }

  private codeMonitor() {
    this.editroService.code$.subscribe(res => {
      if (res) {
        this.htmlCode = res.html;
        this.cssCode = res.css;
        this.jsCode = res.js;
        this.previewCode = {
          html: res.html || '',
          css: res.css || '',
          js: res.js || ''
        }
      }
    })
  }

}
