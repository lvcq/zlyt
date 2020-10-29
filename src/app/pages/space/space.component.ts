import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  public openSideNav = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.openSideNav = !this.openSideNav;
  }

}
