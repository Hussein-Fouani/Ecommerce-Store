import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.css',
})
export class ProductviewComponent implements OnInit {
  product: Product;

  constructor(private activatedrouter:ActivatedRoute) {}

  ngOnInit() {
    this.activatedrouter.snapshot.data['product'];
    
  }
}
