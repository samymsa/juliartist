import { NgModule } from '@angular/core';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { NgxParticlesComponent } from '@omnedia/ngx-particles';
import { AccountModule } from '../account/account.module';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreRoutingModule } from './core-routing.module';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AboutMePageComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    CoreRoutingModule,
    AccountModule,
    ShoppingCartModule,
    NgxParticlesComponent,
    NgxGradientTextComponent,
  ],
  exports: [NavbarComponent, FooterComponent, MainComponent],
})
export class CoreModule {}
