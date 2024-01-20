import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/_services/product.service';
import { ViewImagesDiaglogComponent } from '../view-images-diaglog/view-images-diaglog.component';
import { ImageProcessingService } from '../services/image-processing.service';
import { Product } from '../model/product.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-showproducts-details',
  templateUrl: './showproducts-details.component.html',
  styleUrls: ['./showproducts-details.component.css'],
})
export class ShowproductsDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private imageProcessingService: ImageProcessingService
    ,private router:Router
  ) {}

  productDetails: Product[] = [];
  displayedColumns: string[] = [
    'productId',
    'productname',
    'productdescription',
    'productprice',
    'discountprice',
    'Images',
    'Edit',
    'Delete',
  ];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService
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

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProducts();
    });
  }

  openDialog(productImages: Product) {
    this.dialog.open(ViewImagesDiaglogComponent, {
      height: '500px',
      width: '500px',
      data: { images: productImages.productImages }, 
    });
  }
  editColumn(element:Product){
    this.router.navigate(['/addnewproduct',{producId:productId}]);
    
  }
}
