import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  isOpened: boolean = false;

  constructor(private dialog:Dialog){
  }

  openPasswordDialog() {
    this.dialog.open(ForgotPasswordComponent, {
      maxWidth: 500,
      autoFocus: false
    });
  }

  

}
