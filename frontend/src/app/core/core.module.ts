import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountModule } from '../account/account.module';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainComponent,
    HeroComponent,
  ],
  imports: [RouterModule, AccountModule, ShoppingCartModule],
  exports: [NavbarComponent, FooterComponent, MainComponent, HeroComponent],
})
export class CoreModule {}
