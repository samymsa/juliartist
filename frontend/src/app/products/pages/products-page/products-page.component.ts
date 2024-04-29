import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './products-page.component.html',
  providers: [ApiService],
  imports: [ReactiveFormsModule, CommonModule, ProductCardComponent],
})
export class ProductsPageComponent {
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
    return this.searchForm.valueChanges.pipe(
      startWith(this.searchForm.value),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.api.getProducts(query)),
      catchError(() => of([])),
      share(),
    );
  }

  private getCollections(): Observable<string[]> {
    return this.api
      .getCollections()
      .pipe(catchError(() => of([])))
      .pipe(share());
  }
}
