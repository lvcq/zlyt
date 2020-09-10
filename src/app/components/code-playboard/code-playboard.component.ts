import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-code-playboard',
  templateUrl: './code-playboard.component.html',
  styleUrls: ['./code-playboard.component.scss']
})
export class CodePlayboardComponent implements OnInit, OnChanges {

  @Input() lang: string;
  @Input() code: string;
  @Output() codeChange = new EventEmitter();

  @ViewChild("codeEditor", { static: true, read: ElementRef }) codeEditor: ElementRef<HTMLDivElement>;

  private editor: any;
  private codeChangeTimer: any;
  private beautify: any;
  constructor() {
    this.beautify = ace.require("ace/ext/beautify");
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.lang) {
      const mode = this.getModeByLang();
      if (!this.editor) {
        this.initEditor(mode);
      }
    }
  }

  private initEditor(mode: string) {
    this.editor = ace.edit(this.codeEditor.nativeElement, {
      mode,
      selectionStyle: "text"
    });
    this.editor.on('change', () => {
      this.checkCodeAfterInput();
    })
  }

  // 0.5s没有输入，检查输入内容是否有错误，没有错误则触发codeChange
  private checkCodeAfterInput() {
    if (this.codeChangeTimer) {
      clearTimeout(this.codeChangeTimer);
    }
    this.codeChangeTimer = setTimeout(() => {
      if (this.validCode()) {
        this.codeChange.emit(this.editor.getValue())
      }
    }, 500)
  }

  validCode(): boolean {
    const annotations = this.editor.session.getAnnotations();
    const len = annotations.length;
    for (let i = 0; i < len; i++) {
      const annotation = annotations[i];
      if (annotation.type === 'error') {
        return false;
      }
    }
    return true;
  }

  private getModeByLang() {
    switch (this.lang) {
      case 'javascript':
        return 'ace/mode/javascript';
      case 'html':
        return 'ace/mode/html';
      case 'css':
        return 'ace/mode/css';
    }
  }

  beautifyCode() {
    this.beautify.beautify(this.editor.session);
  }

}
