import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ShoppingCartAddComponent } from './shopping-cart-add/shopping-cart-add.component';
import { ShoppingCartLinkComponent } from './shopping-cart-link/shopping-cart-link.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartState } from './shopping-cart.state';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartRemoveComponent } from './shopping-cart-remove/shopping-cart-remove.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartLinkComponent,
    ShoppingCartAddComponent,
    ShoppingCartRemoveComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    NgxsModule.forFeature([ShoppingCartState]),
  ],
  exports: [
    ShoppingCartComponent,
    ShoppingCartLinkComponent,
    ShoppingCartAddComponent,
  ],
})
export class ShoppingCartModule {}
