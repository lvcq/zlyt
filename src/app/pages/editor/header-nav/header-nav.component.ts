import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  constructor(
    private editorService: EditorService
  ) { }

  ngOnInit(): void {
  }


  handleSave() {
    this.editorService.saveNewDemo();
  }

}
