import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

import { CodePlayboardComponent } from './code-playboard.component';

@NgModule({
  declarations: [CodePlayboardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    NzCodeEditorModule,
    FormsModule
  ],
  exports: [
    CodePlayboardComponent
  ]
})
export class CodePlayboardModule { }
