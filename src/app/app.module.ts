import { OverlayModule } from '@angular/cdk/overlay';
import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeModule } from './home/home.module';
import { CreateComponent } from './products/create/create.component';
import { ProductsComponent } from './products/products.component';
import { ProductscardsComponent } from './products/productscards/productscards.component';
import { SolicitudComponent } from './products/solicitud/solicitud.component';
import { BreadcrumbsService } from './service/breadcrumbs.service';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonSessionComponent } from './shared/header/button-session/button-session.component';
import { HeaderComponent } from './shared/header/header.component';
import { TableroControlModule } from './tablero-control/tablero-control.module';
import { ListasolicitudComponent } from './products/listasolicitud/listasolicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ButtonSessionComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    CreateComponent,
    SolicitudComponent,
    ProductscardsComponent,
    ListasolicitudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    TableroControlModule,
    NgOptimizedImage,
    OverlayModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [BreadcrumbsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
