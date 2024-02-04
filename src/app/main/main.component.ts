import { Component } from '@angular/core';
import { UserFormComponent } from '../user/user-form/user-form.component';
import { UserDataComponent } from '../user/user-data/user-data.component';
import { User } from '../user/user';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserFormComponent, UserDataComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  model = new User();
}
