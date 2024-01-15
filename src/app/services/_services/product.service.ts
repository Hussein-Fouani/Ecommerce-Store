import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseurl="http://localhost:9090/api/v1/addNewProduct"

  constructor(private httpclient:HttpClient) { }

  public addProduct(product :Product){
   return this.httpclient.post<Product>(this.baseurl,product);
  }
}
