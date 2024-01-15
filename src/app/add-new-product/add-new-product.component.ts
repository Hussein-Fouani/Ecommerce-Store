import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/_services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css',
})
export class AddNewProductComponent {
  product: Product = {
    productname: '',
    productdescription: '',
    productprice: 0,
    discountprice: 0,
  };

  constructor(private productservice:ProductService) {}
  addProduct(productform: NgForm) {
    this.productservice.addProduct(this.product).subscribe((sub)=>{
      
    })
  }
}
