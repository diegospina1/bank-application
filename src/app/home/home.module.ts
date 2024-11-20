import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {SliderComponent} from './slider/slider.component';
import { CardCrearCuentaComponent } from './card-crear-cuenta/card-crear-cuenta.component';


@NgModule({
  declarations: [HomeComponent, SliderComponent, CardCrearCuentaComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
