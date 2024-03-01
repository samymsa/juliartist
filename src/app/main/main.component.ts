import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { Product } from '../models/product';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  providers: [ApiService],
  imports: [ReactiveFormsModule, CommonModule, ProductCardComponent],
})
export class MainComponent {
  products$: Observable<Product[]>;
  collections$: Observable<string[]>;

  searchForm = this.fb.group({
    title: [''],
    collection: [''],
  });

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
  ) {
    this.products$ = this.getProducts();
    this.collections$ = this.getCollections();
  }

  private getProducts(): Observable<Product[]> {
    const products$ = this.api.getProducts();
    const search$ = this.searchForm.valueChanges.pipe(startWith(this.searchForm.value));

    return combineLatest([products$, search$]).pipe(
      map(([products, { title, collection }]) => products.filter(product => {
        const titleMatch = product.title.toLowerCase().includes(title?.toLowerCase() ?? '');
        const collectionMatch = collection ? product.collection === collection : true;
        return titleMatch && collectionMatch;
      }))
    );
  }

  private getCollections(): Observable<string[]> {
    return this.api.getCollections();
  }
}
