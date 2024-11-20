import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CarrouselComponent} from "./home/carrousel/carrousel.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'}, children: [{ path: 'carousel', component: CarrouselComponent, data: { breadcrumb: 'Carousel' } },]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
