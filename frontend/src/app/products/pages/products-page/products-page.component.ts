import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  Observable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  share,
  startWith,
  switchMap,
} from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
  products$: Observable<Product[]>;
  collections$: Observable<string[]>;

  searchForm = this.fb.group({
    title: [''],
    collection: [''],
  });

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
  ) {
    this.products$ = this.getProducts();
    this.collections$ = this.getCollections();
  }

  private getProducts(): Observable<Product[]> {
    return this.searchForm.valueChanges.pipe(
      startWith(this.searchForm.value),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.productsService.getProducts(query)),
      catchError(() => of([])),
      share(),
    );
  }

  private getCollections(): Observable<string[]> {
    return this.productsService
      .getCollections()
      .pipe(catchError(() => of([])))
      .pipe(share());
  }
}
