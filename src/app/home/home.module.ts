import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import { CarrouselComponent } from './carrousel/carrousel.component';


@NgModule({
  declarations: [HomeComponent, CarrouselComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
