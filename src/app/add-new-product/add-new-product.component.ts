import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/_services/product.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

interface FileHandle {
  file: File;
  url: SafeUrl;
}

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent implements OnInit {
  product = {
    productname: '',
    productdescription: '',
    productprice: 0,
    discountprice: 0,
    productImages: [] as FileHandle[],
  };

  constructor(
    private productService: ProductService,
    private dom: DomSanitizer,
    private activatedrouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.activatedrouter.snapshot.data['product'];
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productService.setProducts(products);
    });
  }

  addProduct(productForm: NgForm) {
    const formData = this.prepareFormData(this.product);

    this.productService.addProduct(formData).subscribe((newProduct) => {
      productForm.reset();
      this.loadProducts(); // Reload products after adding a new one
    });
  }

  prepareFormData(product: any): FormData {
    const formData = new FormData();
    formData.append('product', JSON.stringify(product));

    product.productImages.forEach((image: any, index: any) => {
      formData.append(`imagefile${index}`, image.file, image.file.name);
    });

    return formData;
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.dom.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ) as SafeUrl,
      };
      this.product.productImages.push(fileHandle);
    }
  }

  removeImage(index: number) {
    this.product.productImages.splice(index, 1);
  }
  fileDrop(filehandle: FileHandle) {
    this.product.productImages.push(filehandle);
  }
}
