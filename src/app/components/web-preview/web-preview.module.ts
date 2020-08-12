import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPreviewComponent } from './web-preview.component';


@NgModule({
  declarations: [
    WebPreviewComponent
  ],
  exports:[
    WebPreviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebPreviewModule { }
