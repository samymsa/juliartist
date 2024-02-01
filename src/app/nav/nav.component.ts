import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  templateUrl: './nav.component.html',
})
export class NavComponent {

}
