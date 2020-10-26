import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatGridListModule } from '@angular/material/grid-list';

import { CodePlayboardModule } from '@components/code-playboard/code-playboard.module';
import { WebPreviewModule } from '@components/web-preview/web-preview.module';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MetaInfoComponent } from './meta-info/meta-info.component';
import { CodeFieldComponent } from './code-field/code-field.component';
import { EditorService } from './editor.service';


@NgModule({
  declarations: [
    EditorComponent,
    HeaderNavComponent,
    MetaInfoComponent,
    CodeFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    EditorRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatGridListModule,
    CodePlayboardModule,
    WebPreviewModule
  ],
  providers: [
    EditorService
  ]
})
export class EditorModule { }
