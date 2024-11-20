import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import {HomeModule} from "./home/home.module";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {BreadcrumbsService} from "./service/breadcrumbs.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [BreadcrumbsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
