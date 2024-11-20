import {Component} from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
})
export class OptionsComponent {
  options = [
    {icon: 'options-icons/search.svg', alt: 'Opcion solicitudes', name: 'Solicitudes', route: '/solicitudes'},
    {icon: 'options-icons/tarjeta.svg', alt: 'Opcion tarjeta', name: 'Productos', route: '/productos'},
    {icon: 'options-icons/diagrama-torta.svg', alt: 'Opcion panel de control', name: 'Panel control', route: '/panel-control'},
  ]

}
