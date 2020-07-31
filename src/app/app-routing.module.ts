import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'editor'
  }, {
    path: 'editor',
    loadChildren: () => import('@pages/editor/editor.module').then(module => module.EditorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
