import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseurl = 'http://localhost:9090/api/v1/';

  private products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    const url = `${this.baseurl}/getProducts`; // Adjust the URL to your backend API
    return this.httpClient.get<Product[]>(url);
  }

  public setProducts(products: Product[]): void {
    this.products = products;
  }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>(this.baseurl, product);
  }
}
