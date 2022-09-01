import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'busqueda',
        loadChildren: () => import('../busqueda/busqueda.module').then( m => m.BusquedaPageModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('../notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tablinks/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TablinksPageRoutingModule {}
