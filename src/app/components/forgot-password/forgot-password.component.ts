import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  fieldType: 'text' | 'password' = 'password';

  showPassword(){
    this.fieldType = this.fieldType == 'password' ? 'text' : 'password';   
  }



}
