import { Component } from '@angular/core';
import { Solicitud } from '../../products/solicitud.model';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-tarjeta-dashboard',
  templateUrl: './tarjeta-dashboard.component.html'
})
export class TarjetaDashboardComponent {

  tarjetasEnFabricacion = 5;
  tarjetasEnEnvio = 5;
  tarjetasEntregadas = 5;

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

  colorFabricacion = "#0ea5e9";
  colorEnvio = "#facc15";
  colorEntregadas = "#22c55e";
  
  data = {
    labels: [
      'En fabricación',
      'Enviadas',
      'Entregadas'
    ],
    datasets: [{
      label: 'Solicitudes de productos',
      data: [this.tarjetasEnFabricacion, this.tarjetasEnEnvio, this.tarjetasEntregadas],
      backgroundColor: [
        this.colorFabricacion,
        this.colorEnvio,
        this.colorEntregadas
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
    this.chart = new Chart('tarjetas', this.config);
  }


}
