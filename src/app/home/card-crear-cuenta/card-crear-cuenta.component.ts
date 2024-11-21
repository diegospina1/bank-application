import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-crear-cuenta',
  templateUrl: './card-crear-cuenta.component.html'
})
export class CardCrearCuentaComponent {

  image: string = "growth-capital.avif";

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private router: Router, formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    if (this.form.valid) {
      sessionStorage.setItem('emailRegistro', this.form.controls['email'].value);
      this.router.navigate(['/register']);
    } else {
      alert('Por favor, llene todos los campos requeridos correctamente.');
    }
  }
}
