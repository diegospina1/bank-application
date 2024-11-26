import { Component } from '@angular/core';
import { faBars, faPenToSquare, faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent {
  options = [
    {name: 'Solicitudes', route: 'solicitudes', icon: faPenToSquare},
    {name: 'Tarjetas', route: 'tarjetas', icon: faCreditCard}
  ]

  faBars = faBars;

  
}
