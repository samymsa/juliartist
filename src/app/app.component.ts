import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NavbarComponent, MainComponent, FooterComponent],
})
export class AppComponent {
  constructor() {
    registerLocaleData(localeFr);
  }

  title = 'my-app';
}
