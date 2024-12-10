import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SolicitudEntregaComponent } from './components/solicitud-entrega/solicitud-entrega.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'register',
    component: RegisterComponent,
    data: { breadcrumb: 'Registro' },
  },
  {
    path: 'panel-control',
    loadChildren: () =>
      import('./tablero-control/tablero-control.module').then(
        (m) => m.TableroControlModule
      ),
    data: { breadcrumb: 'Panel de Control' },
  },
  {
    path:'productos', 
    component: ProductsComponent, 
    data: {breadcrumb: 'Productos' } 
  },
  {
    path:'solicitud', 
    component: SolicitudEntregaComponent, 
    data: {breadcrumb: 'Solicitud' } 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
