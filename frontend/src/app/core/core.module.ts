import { NgModule } from '@angular/core';
import { AccountModule } from '../account/account.module';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    HeroComponent,
  ],
  imports: [CoreRoutingModule, AccountModule, ShoppingCartModule],
  exports: [NavbarComponent, FooterComponent, MainComponent],
})
export class CoreModule {}
