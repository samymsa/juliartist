import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  imports: [RouterOutlet],
})
export class MainComponent {}
