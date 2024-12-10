import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { SolicitudComponent } from '../solicitud/solicitud.component';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
})
export class ProductsCardsComponent {
  products = [
    {
      name: 'Tarjeta Blue Sky',
      imgSrc: 'products-img/blue_sky_visa.png',
      description:
        'Tarjeta de Crédito blue sky conocida por su amplia aceptación y beneficios exclusivos. Ideal para compras seguras y convenientes tanto a nivel local como internacional.',
      alt: 'Imagen representativa de la Tarjeta Blue Sky Visa.',
    },
    {
      name: 'Tarjeta de Credito Visa',
      imgSrc: 'products-img/credito_visa.png',
      description:
        'Tarjeta de crédito Visa, reconocida mundialmente por su seguridad y aceptación en millones de establecimientos. Perfecta para viajes y compras internacionales.',
      alt: 'Imagen representativa de la Tarjeta de credito Visa.',
    },
    {
      name: 'Tarjeta Visa Soriana',
      imgSrc: 'products-img/soriana_visa.png',
      description:
        'Tarjeta de crédito visa soriana de alta gama con beneficios exclusivos como acceso a salas VIP en aeropuertos, recompensas en puntos y servicios personalizados.',
      alt: 'Imagen representativa de la Tarjeta de credito Visa Soriana.',
    },
    {
      name: 'Tarjeta Ocean Breeze',
      imgSrc: 'products-img/ocean_breeze_visa.png',
      description:
        'La Tarjeta Ocean Breeze ofrece una experiencia de compra única con beneficios exclusivos, recompensas en cada uso y seguridad en cada transacción. Ideal para quienes buscan flexibilidad y ventajas tanto en compras locales como internacionales.',
      alt: 'Imagen representativa de la Tarjeta Ocean Breeze Visa.',
    },
    {
      name: 'Tarjeta Ocean Breeze 2',
      imgSrc: 'products-img/ocean_breeze_visa.png',
      description:
        'La Tarjeta Ocean Breeze ofrece una experiencia de compra única con beneficios exclusivos, recompensas en cada uso y seguridad en cada transacción. Ideal para quienes buscan flexibilidad y ventajas tanto en compras locales como internacionales.',
      alt: 'Imagen representativa de la Tarjeta Ocean Breeze Visa.',
    },
  ];

  constructor(private dialog: Dialog){
  }

  openSolicitudDialog(){
    this.dialog.open(SolicitudComponent, {
      autoFocus: false
    });
  }
}
