import { Product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/_services/product.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import e from 'express';

interface FileHandle {
  files: File;
  url: SafeUrl;
}

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent implements OnInit {
  product: Product = {
    productname: '',
    productdescription: '',
    productprice: 0,
    discountprice: 0,
    productImages: [],
  };

  constructor(
    private productService: ProductService,
    private dom: DomSanitizer
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.productService.setProducts(products);
    });
  }

  addProduct(productform: NgForm) {
    const formData = this.prepareFormData(this.product);

    this.productService.addProduct(formData).subscribe((sub: Product) => {
      productform.reset();
    });
  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    );

    for (let i = 0; i < product.productImages.length; i++) {
      formData.append(
        'imagefile',
        product.productImages[i].files,
        product.productImages[i].files.name
      );
    }

    return formData;
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const filehandle: import('fs/promises').FileHandle = {
        files: file,
        url: this.dom.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ) as SafeUrl,
      };
      this.product.productImages.push(filehandle);
    }
  }
  removeImages(event:number){
    this.product.productImages.splice(event,1);

  }
}
