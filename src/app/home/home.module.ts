import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {SliderComponent} from './slider/slider.component';
import { CardCrearCuentaComponent } from './card-crear-cuenta/card-crear-cuenta.component';
import { OptionsComponent } from './options/options.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [HomeComponent, SliderComponent, CardCrearCuentaComponent, OptionsComponent],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class HomeModule {
}
