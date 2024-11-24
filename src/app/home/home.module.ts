import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../components/shared/shared.module';
import { CardCrearCuentaComponent } from './card-crear-cuenta/card-crear-cuenta.component';
import { HomeComponent } from './home.component';
import { OptionsComponent } from './options/options.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    CardCrearCuentaComponent,
    OptionsComponent,
  ],
  imports: [CommonModule, RouterLink, ReactiveFormsModule, SharedModule],
})
export class HomeModule {}
