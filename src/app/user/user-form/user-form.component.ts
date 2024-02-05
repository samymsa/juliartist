import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  honorificPrefixes = {
    '': 'Civilité...',
    'M': 'Monsieur',
    'F': 'Madame',
    'O': 'Autre'
  }

  @Input() model = new User();
  @Output() submit = new EventEmitter<User>();

  onSubmit(form: NgForm) {
    this.submit.emit(this.model);
    form.reset();
    this.model.reset();
  }
}
