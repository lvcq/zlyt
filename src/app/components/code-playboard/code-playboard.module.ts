import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { CodePlayboardComponent } from './code-playboard.component';



@NgModule({
  declarations: [CodePlayboardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    CodePlayboardComponent
  ]
})
export class CodePlayboardModule { }
