import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeModule } from './home/home.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreadcrumbsService } from './service/breadcrumbs.service';
import { ButtonSessionComponent } from './shared/header/button-session/button-session.component';
import { NgOptimizedImage } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { SolicitudComponent } from './products/solicitud/solicitud.component';
import { SharedModule } from './components/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductscardsComponent } from './products/productscards/productscards.component';
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
