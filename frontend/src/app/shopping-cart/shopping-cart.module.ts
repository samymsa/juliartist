import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ShoppingCartAddComponent } from './shopping-cart-add/shopping-cart-add.component';
import { ShoppingCartState } from './shopping-cart.state';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingCartAddComponent],
  imports: [CommonModule, NgxsModule.forFeature([ShoppingCartState])],
  exports: [ShoppingCartComponent, ShoppingCartAddComponent],
})
export class ShoppingCartModule {}
