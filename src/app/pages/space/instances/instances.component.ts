import { Component, OnInit } from '@angular/core';
import { DemonstrateAPI } from '@api/demonstrate.api';
import { DemonstrateItem } from '@customTypes/demonstrate';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss']
})
export class InstancesComponent implements OnInit {

  selfDemos:DemonstrateItem[]=[];

  constructor(
    private demoApi:DemonstrateAPI
  ) { }

  ngOnInit(): void {
    this.demoApi.fetchSelfDemonstrates().subscribe(res=>{
      if (res.code===20000){
        this.selfDemos = res.data;
      }
    })
  }

}
