import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'Home'} },
  {path:'crear-producto', component: ProductsComponent, data: {breadcrumb: 'Crear producto'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
