import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ShoppingCartAddComponent } from './components/shopping-cart-add/shopping-cart-add.component';
import { ShoppingCartLinkComponent } from './components/shopping-cart-link/shopping-cart-link.component';
import { ShoppingCartRemoveComponent } from './components/shopping-cart-remove/shopping-cart-remove.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartState } from './shopping-cart.state';

@NgModule({
  declarations: [
    ShoppingCartPageComponent,
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
    ShoppingCartPageComponent,
    ShoppingCartLinkComponent,
    ShoppingCartAddComponent,
  ],
})
export class ShoppingCartModule {}
