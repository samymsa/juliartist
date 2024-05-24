import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Component } from '@angular/core';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CoreModule],
})
export class AppComponent {
  constructor() {
    registerLocaleData(localeFr);
  }

  title = 'juliartist';
}
