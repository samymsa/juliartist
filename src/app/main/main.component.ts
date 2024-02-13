import { Component } from '@angular/core';
import { UserFormComponent } from '../user/user-form/user-form.component';
import { UserDataComponent } from '../user/user-data/user-data.component';
import { User } from '../user/user';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserFormComponent, UserDataComponent, ModalComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  model = new User();
  isModalOpen = false;

  onUserFormSubmit($event: User) {
    this.isModalOpen = true;
  }
}
