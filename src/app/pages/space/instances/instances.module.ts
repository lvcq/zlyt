import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstancesRoutingModule } from './instances-routing.module';
import { InstancesComponent } from './instances.component';


@NgModule({
  declarations: [InstancesComponent],
  imports: [
    CommonModule,
    InstancesRoutingModule
  ]
})
export class InstancesModule { }
