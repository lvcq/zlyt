import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceComponent } from './space.component';

const routes: Routes = [{
  path: '',
  component: SpaceComponent,
  children: [
    {
      path: 'settings',
      loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
