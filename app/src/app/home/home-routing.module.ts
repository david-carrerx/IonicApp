import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'appointments',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage, 
    children: [
      {
        path: 'appointments',
            loadChildren: () => import('../appointments/appointments.module').then(m => m.AppointmentsPageModule)
      },
      {
        path: 'tab2',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
