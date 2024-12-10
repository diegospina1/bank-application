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
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCardsComponent } from './products/products-cards/products-cards.component';
import { SolicitudComponent } from './products/solicitud/solicitud.component';
import { BreadcrumbsService } from './service/breadcrumbs.service';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonSessionComponent } from './shared/header/button-session/button-session.component';
import { HeaderComponent } from './shared/header/header.component';
import { TableroControlModule } from './tablero-control/tablero-control.module';
import { DialogModule } from '@angular/cdk/dialog';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SolicitudEntregaComponent } from './components/solicitud-entrega/solicitud-entrega.component';

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
    CreateProductComponent,
    SolicitudComponent,
    ProductsCardsComponent,
    ForgotPasswordComponent,
    SolicitudEntregaComponent
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
    DialogModule
  ],
  providers: [BreadcrumbsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
