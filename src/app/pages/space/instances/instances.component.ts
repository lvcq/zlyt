import { Component, OnInit } from '@angular/core';
import { DemonstrateAPI } from '@api/demonstrate.api';
import { DemonstrateItem } from '@customTypes/demonstrate';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss']
})
export class InstancesComponent implements OnInit {

  selfDemos: DemonstrateItem[] = [];

  constructor(
    private demoApi: DemonstrateAPI,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.demoApi.fetchSelfDemonstrates().subscribe(res => {
      if (res.code === 20000) {
        let len = res.data.length;
        let half = Math.floor(len / 2);
        let demos = [];
        for (let i = 0; i < half; i = i + 1) {
          demos.push([res.data[2 * i], res.data[2 * i + 1]]);
        }
        if (len % 2 === 1) {
          demos.push([res.data[len - 1]])
        }
        this.selfDemos = demos;
      }
    })
  }

  copyShareUrl(id: string): void {
    const copystatus = this.clipboard.copy(`${environment.server}/zlyt/share/${id}`);
    this.snackBar.open(`分享链接复制${copystatus ? '成功' : '失败'}`, null, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })

  }

}
