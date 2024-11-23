import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import {HomeModule} from "./home/home.module";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {BreadcrumbsService} from "./service/breadcrumbs.service";
import { ButtonSessionComponent } from './shared/header/button-session/button-session.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { SolicitudComponent } from './products/solicitud/solicitud.component';
import { ProductscardsComponent } from './products/productscards/productscards.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ButtonSessionComponent,
    ProductsComponent,
    CreateComponent,
    SolicitudComponent,
    ProductscardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgOptimizedImage
  ],
  providers: [BreadcrumbsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
