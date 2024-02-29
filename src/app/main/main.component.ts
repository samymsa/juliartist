import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
