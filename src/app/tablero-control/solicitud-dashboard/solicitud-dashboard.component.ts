import { Component } from '@angular/core';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

@Component({
  selector: 'app-solicitud-dashboard',
  templateUrl: './solicitud-dashboard.component.html'
})
export class SolicitudDashboardComponent {

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
