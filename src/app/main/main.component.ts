import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
