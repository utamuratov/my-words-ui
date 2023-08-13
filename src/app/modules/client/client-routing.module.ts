import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'group' },
      {
        path: 'group',
        loadComponent: () =>
          import('./group/group.component').then((m) => m.GroupComponent),
      },
      {
        path: 'my-words',
        loadChildren: () =>
          import('../client/my-words/my-words.module').then(
            (m) => m.MyWordsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
