import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ShoppingCartAddComponent } from './shopping-cart-add/shopping-cart-add.component';
import { ShoppingCartLinkComponent } from './shopping-cart-link/shopping-cart-link.component';
import { ShoppingCartState } from './shopping-cart.state';

@NgModule({
  declarations: [ShoppingCartLinkComponent, ShoppingCartAddComponent],
  imports: [CommonModule, NgxsModule.forFeature([ShoppingCartState])],
  exports: [ShoppingCartLinkComponent, ShoppingCartAddComponent],
})
export class ShoppingCartModule {}
