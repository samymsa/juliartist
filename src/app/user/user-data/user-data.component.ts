import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
})
export class UserDataComponent {
  @Input() model = new User();
}
