import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

import { SpaceRoutingModule } from './space-routing.module';
import { SpaceComponent } from './space.component';

@NgModule({
  declarations: [SpaceComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule
  ]
})
export class SpaceModule { }
