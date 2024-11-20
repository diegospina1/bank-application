import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-session',
  templateUrl: './button-session.component.html'
})
export class ButtonSessionComponent {

  @Input()
  isLoggedIn: boolean = false;
}
