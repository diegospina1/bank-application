import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudDashboardComponent } from './solicitud-dashboard/solicitud-dashboard.component';
import { TarjetaDashboardComponent } from './tarjeta-dashboard/tarjeta-dashboard.component';
import { TableroControlComponent } from './tablero-control.component';

const routes: Routes = [
  {path: '', component: TableroControlComponent, data: {breadcrumb: ''},
    children: [
      {path: 'solicitudes', component: SolicitudDashboardComponent, data: {breadcrumb: 'Solicitudes'}},
      {path: 'tarjetas', component: TarjetaDashboardComponent, data: {breadcrumb: 'Tarjetas'}}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroControlRoutingModule { }
