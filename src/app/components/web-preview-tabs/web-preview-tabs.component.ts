import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-preview-tabs',
  templateUrl: './web-preview-tabs.component.html',
  styleUrls: ['./web-preview-tabs.component.scss']
})
export class WebPreviewTabsComponent implements OnInit {

  @Input() html: string;
  @Input() css:string;
  @Input() js:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.css)
  }

}
