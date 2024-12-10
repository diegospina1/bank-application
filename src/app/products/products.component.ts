import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { CreateProductComponent } from './create-product/create-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  faPlus = faPlus;

  isEmpleado: boolean = true;

  constructor(private dialog: Dialog){
  }

  openCreateProductDialog(){
    this.dialog.open(CreateProductComponent);
  }
  
}
