import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [ProductCardComponent, ProductsPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ShoppingCartModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
