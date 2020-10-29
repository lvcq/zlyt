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
import { Subject } from 'rxjs';
import { editor } from 'monaco-editor';

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

  private editorIns: editor.IStandaloneCodeEditor;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      this.editorIns &&
      changes &&
      changes.code &&
      this.code !== this.editorIns.getValue()) {
      this.beautifyCode();
    }
  }


  beautifyCode() {
    if (this.editorIns) {
      switch (this.lang) {
        case 'css':
          const format_code = css_beautify(this.editorIns.getValue());
          this.editorIns.setValue(format_code);
          break;
        default:
          this.editorIns.trigger(null, 'editor.action.formatDocument', null);
      }
    }
  }

  handleAfterEditorInit(editorIns: editor.IStandaloneCodeEditor) {
    this.editorIns = editorIns;
    this.editorIns.onDidChangeModelContent(() => {
      this.codeChange.emit(this.editorIns.getValue())
    })
    setTimeout(() => {
      this.beautifyCode();
    }, 300)
  }

}
