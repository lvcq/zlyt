import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-web-preview',
  templateUrl: './web-preview.component.html',
  styleUrls: ['./web-preview.component.scss']
})
export class WebPreviewComponent implements OnInit, OnChanges {

  @Input() html: string;
  @Input() css: string;
  @Input() javascript: string;

  public webUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && (changes.html || changes.css || changes.javascript)) {
      const page = this.assemblyPage();
      this.strToWebUrl(page);
    }
  }

  private assemblyPage() {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          ${this.css || ''}
        </style>
      </head>
      <body>
        ${this.html || ''}
        <script type="text/javascript">
          ${this.javascript || ''}
        </script>
      </body>
    </html>
    `;
  }

  private strToWebUrl(str: string) {
    const bolb = new Blob([str], {
      type: 'text/html'
    });
    this.webUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(bolb));
  }

}
