import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/_services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-showproducts-details',
  templateUrl: './showproducts-details.component.html',
  styleUrl: './showproducts-details.component.css',
})
export class ShowproductsDetailsComponent implements OnInit {
  constructor(private product: ProductService) {}
  productDetails: Product[] = [];
  displayedColumns: string[] = [
    'productId',
    'productname',
    'productdescription',
    'productprice',
    'discountprice',
    'Edit',
    'Delete',
  ];
  ngOnInit(): void {
    this.getProducts();
  }
  public getProducts() {
    this.product.getAllProducts().subscribe((sub: Product[]) => {
      this.productDetails = sub;
    });
  }
  deleteProduct(productId:number){
    this.product.deleteProduct(productId).subscribe((sub)=>{
      this.getProducts();
    })
  }
}
