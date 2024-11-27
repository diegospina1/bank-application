import { Component } from '@angular/core';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

@Component({
  selector: 'app-solicitud-dashboard',
  templateUrl: './solicitud-dashboard.component.html'
})
export class SolicitudDashboardComponent {

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
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 5
    }]
  };

  public config: any = {
    type: 'pie',
    data: this.data,
  };

  chart: any;

  ngOnInit() {
    this.chart = new Chart('hola', this.config);
  }

}
