import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPreviewTabsComponent } from './web-preview-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CodePlayboardModule } from '@components/code-playboard/code-playboard.module';
import { WebPreviewModule } from '@components/web-preview/web-preview.module';

@NgModule({
  declarations: [WebPreviewTabsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    CodePlayboardModule,
    WebPreviewModule
  ],
  exports: [
    WebPreviewTabsComponent
  ]
})
export class WebPreviewTabsModule { }
