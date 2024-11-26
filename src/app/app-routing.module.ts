import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {AppComponent} from "./app.component";
import {ProductsComponent} from "./products/products.component";
import { TableroControlComponent } from './tablero-control/tablero-control.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'Home'} },
  {path: 'register', component: RegisterComponent, data: {breadcrumb: 'Registro'} },
  {path:'crear-producto', component: ProductsComponent, data: {breadcrumb: 'Crear producto'} },
  {path:'app-productscards', component: ProductsComponent, data: {breadcrumb: 'Productos banco'} },
  {path: 'panel-control', component: TableroControlComponent, data: {breadcrumb: 'Tablero de Control'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
