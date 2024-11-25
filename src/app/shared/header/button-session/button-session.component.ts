import {Component, Input} from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-button-session',
  templateUrl: './button-session.component.html'
})
export class ButtonSessionComponent {

  faUser = faUser;

  @Input()
  isLoggedIn: boolean = false;

  image: string = 'iconoUsuario.png';
}
