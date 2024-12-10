import { Component, Input } from '@angular/core';
import { Solicitud } from '../../products/solicitud.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  @Input() datos: Solicitud[] = []
  paginaActual: number = 1;
  filasPorPagina: number = 5;

  buttonStyle = [
    "flex", 
    "cursor-pointer",
    "items-center",
    "justify-center",
    "px-3", "h-8",
    "text-sm", "font-medium", "text-emerald-700",
    "bg-white",
    "border", "border-gray-300", "rounded-md",
    "hover:bg-gray-100"
  ];

  obtenerDatosPaginados(): any[] {
    const inicio = (this.paginaActual - 1) * this.filasPorPagina;
    const fin = inicio + this.filasPorPagina;

    return this.datos.slice(inicio, fin);
  }

  cambiarPagina(numeroPagina: number): void {
    this.paginaActual = numeroPagina;
  }

}
