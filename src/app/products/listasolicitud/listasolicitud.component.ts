import { Component } from '@angular/core';
import { Solicitud } from '../solicitud.model';

@Component({
  selector: 'app-listasolicitud',
  templateUrl: './listasolicitud.component.html'
})
export class ListasolicitudComponent {

  solicitudes: Array<Solicitud> = [
    {id:'1', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'2', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'3', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'4', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'5', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'6', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'7', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'8', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'9', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'10', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'11', nombre:'Juliana', apellido:'Saragoa', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'12', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'13', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
    {id:'14', nombre:'Juliana', apellido:'Saragoza', producto:'Tarjeta de Credito Soriana', estado:'En proceso'},
  ]

  

}
