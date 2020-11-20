import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitResolver } from '@services/init.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    resolve: {
      init: InitResolver
    },
    redirectTo: '/space'
  },
  {
    path: 'editor',
    loadChildren: () => import('@pages/editor/editor.module').then(module => module.EditorModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  { path: 'space', loadChildren: () => import('./pages/space/space.module').then(m => m.SpaceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
