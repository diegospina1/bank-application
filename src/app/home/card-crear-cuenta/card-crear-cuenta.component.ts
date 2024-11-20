import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-crear-cuenta',
  templateUrl: './card-crear-cuenta.component.html'
})
export class CardCrearCuentaComponent {

  image: string = "growth-capital.avif";

  constructor(router: Router) {
  }

  redirectToRegisterForm(){

  }
}
