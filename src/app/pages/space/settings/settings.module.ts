import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ThemeSettingsComponent } from './theme-settings/theme-settings.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ThemeSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatRadioModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
