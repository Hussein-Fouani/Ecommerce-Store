import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/_services/product.service';
import { Product } from '../model/product.model';
import { ImageProcessingService } from '../services/image-processing.service';
import { tap } from 'rxjs';
import { Init } from 'v8';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productDetails: any;
  constructor(
    private productservice: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router : Router
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productservice
      .getAllProducts()
      .pipe(
        tap((products: Product[]) => {
          products.forEach((prod: Product) => {
            this.imageProcessingService.createImages(prod);
          });
        })
      )
      .subscribe((sub: Product[]) => {
        this.productDetails = sub;
      });
  }
  showproductDetails(productId: any){
    this.router.navigate(['/productviewComponent',productId: productId]);
  }
}
