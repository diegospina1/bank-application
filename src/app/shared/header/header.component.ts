import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isNotLoggedIn: boolean = true;
  isLoggedIn: boolean = false;

  checkEmptyProp(condition: boolean){
    if (condition){
      this.isLoggedIn = false; 
    }

  }

}
