import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SolicitudDashboardComponent } from './solicitud-dashboard/solicitud-dashboard.component';
import { TableroControlRoutingModule } from './tablero-control-routing.module';
import { TableroControlComponent } from './tablero-control.component';
import { TarjetaDashboardComponent } from './tarjeta-dashboard/tarjeta-dashboard.component';
import { ListasolicitudComponent } from '../products/listasolicitud/listasolicitud.component';
import { TarjetaTableComponent } from './tarjeta-dashboard/tarjeta-table/tarjeta-table.component';


@NgModule({
  declarations: [
    TableroControlComponent,
    MenuBarComponent,
    SolicitudDashboardComponent,
    TarjetaDashboardComponent,
    ListasolicitudComponent,
    TarjetaTableComponent
  ],
  imports: [
    CommonModule,
    TableroControlRoutingModule,
    CdkAccordionModule,
    FontAwesomeModule,
  ]
})
export class TableroControlModule { }
