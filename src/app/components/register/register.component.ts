import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emailMatchValidator} from "../../validators/email-match.validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  registerEmail: any;

  tiposDocumento = ['Cedula', 'Pasaporte', 'Cedula de extranjería'];

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmarEmail: new FormControl('', [Validators.required, Validators.email]),
    nombres: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)*$')]),
    apellidos: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)*$')]),
    tipoDocumento: new FormControl('', [Validators.required]),
    numeroDocumento: new FormControl('', [Validators.required, Validators.pattern('^\d{10}$')]),
    numeroCelular: new FormControl('', [Validators.required, Validators.pattern('^\d{10}$')]),
    password: new FormControl('', [Validators.required]),
  }, {validators: emailMatchValidator() })

  constructor(private router: Router, formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerEmail = sessionStorage.getItem('emailRegistro');
    console.log(this.registerEmail);
  }


  onSubmit(): void {
    // if (this.form.valid) {
    //   this.router.navigate(['/home']);
    // } else {
    //   console.log(this.form.errors);
    //   alert('Por favor, llene todos los campos requeridos correctamente.');
    // }
    this.router.navigate(['/home']);
  }
}
