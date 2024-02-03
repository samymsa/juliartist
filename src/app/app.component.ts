import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '@picocss/pico';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root, [app-root]',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
