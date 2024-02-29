import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  providers: [ApiService],
  imports: [CommonModule, ProductCardComponent],
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private apiService: ApiService) {
    this.products$ = this.apiService.getProducts();
  }
}
