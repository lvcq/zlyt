import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { WebPreviewTabsModule } from '@components/web-preview-tabs/web-preview-tabs.module';

import { InstancesRoutingModule } from './instances-routing.module';
import { InstancesComponent } from './instances.component';


@NgModule({
  declarations: [InstancesComponent],
  imports: [
    CommonModule,
    InstancesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    WebPreviewTabsModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class InstancesModule { }
