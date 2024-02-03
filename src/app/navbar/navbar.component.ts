import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-navbar, [app-navbar]',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
