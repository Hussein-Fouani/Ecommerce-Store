import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from './services/_services/product.service';
import { Product } from './model/product.model';
import { ImageProcessingService } from './services/image-processing.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Product> {
  constructor(private productService: ProductService,private imageprog:ImageProcessingService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    const productId = route.paramMap.get('productId');

    if (productId) {
      const id = Number(productId);
      return this.productService.getProductById(id).pipe(map(p)=>this.imageprog.createImages(p)));
    } else {
     
      return of({
        productId: 0,
        productname: '',
        productdescription: '',
        productprice: 0,
        discountprice: 0,
        productImages: [],
      });
    }
  }
}
