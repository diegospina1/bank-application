import { Component } from '@angular/core';
import { Chart, registerables } from "chart.js";
import { Solicitud } from '../../products/solicitud.model';

Chart.register(...registerables);

@Component({
  selector: 'app-solicitud-dashboard',
  templateUrl: './solicitud-dashboard.component.html'
})
export class SolicitudDashboardComponent {

  solicitudes: Solicitud[] = [
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

  colorEnProceso = "#047857";
  colorFinalizadas = "#6ee7b7";

  solicitudesEnProceso: number = 30;
  solicitudesFinalizadas: number = 15
  
  data = {
    labels: [
      'En proceso',
      'Finalizadas',
    ],
    datasets: [{
      label: 'Solicitudes de productos',
      data: [this.solicitudesEnProceso, this.solicitudesFinalizadas],
      backgroundColor: [
        this.colorEnProceso,
        this.colorFinalizadas
      ],
      hoverOffset: 5
    }]
  };

  config: any = {
    type: 'pie',
    data: this.data,
  };

  chart: any;

  ngOnInit() {
    this.chart = new Chart('hola', this.config);
  }

}
