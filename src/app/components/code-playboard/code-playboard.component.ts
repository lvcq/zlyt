import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-playboard',
  templateUrl: './code-playboard.component.html',
  styleUrls: ['./code-playboard.component.scss']
})
export class CodePlayboardComponent implements OnInit {

  @Input() lang:string;
  constructor() { }

  ngOnInit(): void {
  }

}
