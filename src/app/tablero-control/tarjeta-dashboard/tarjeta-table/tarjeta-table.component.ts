import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-table',
  templateUrl: './tarjeta-table.component.html',
})
export class TarjetaTableComponent {
  ELEMENTOS = [
    { id: 1, nombre: 'Elemento 1', edad: 25 },
    { id: 2, nombre: 'Elemento 2', edad: 30 },
    { id: 3, nombre: 'Elemento 3', edad: 22 },
    { id: 4, nombre: 'Elemento 4', edad: 26 },
    { id: 5, nombre: 'Elemento 5', edad: 27 },
    { id: 6, nombre: 'Elemento 6', edad: 31 },
    { id: 7, nombre: 'Elemento 7', edad: 28 },
    { id: 8, nombre: 'Elemento 8', edad: 24 },
    { id: 9, nombre: 'Elemento 9', edad: 29 },
    { id: 10, nombre: 'Elemento 10', edad: 35 },
    { id: 11, nombre: 'Elemento 11', edad: 32 },
  ];

  data = this.ELEMENTOS;
  paginatedData: any = [];
  currentPage = 1;
  rowsPerPage = 5;
  totalPages = Math.ceil(this.data.length / this.rowsPerPage);

  ngOnInit() {
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    this.paginatedData = this.data.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }
}
