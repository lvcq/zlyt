import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from './editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(
    private routerinfo: ActivatedRoute,
    private editorService: EditorService
  ) { }

  ngOnInit(): void {
    this.processDemoId();
  }


  private processDemoId() {
    let id = this.routerinfo.snapshot.params['id'];
    if (id) {
      this.editorService.getDeomInfoById(id);
    } else {
      this.editorService.clear();
    }
  }
}
