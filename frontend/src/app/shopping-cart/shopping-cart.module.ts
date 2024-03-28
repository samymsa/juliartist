import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartAddComponent } from './shopping-cart-add/shopping-cart-add.component';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingCartAddComponent],
  imports: [CommonModule],
  exports: [ShoppingCartComponent, ShoppingCartAddComponent],
})
export class ShoppingCartModule {}
