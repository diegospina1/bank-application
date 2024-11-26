import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent {
  options = [
    {name: 'Solicitudes', route: 'solicitudes'},
    {name: 'Tarjetas', route: 'tarjetas'}
  ]

  
}
