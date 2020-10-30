import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstancesComponent } from './instances.component';

const routes: Routes = [{ path: '', component: InstancesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstancesRoutingModule { }
