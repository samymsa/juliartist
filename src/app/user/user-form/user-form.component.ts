import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  @Output() modelChange = new EventEmitter<User>();
  @Output() submit = new EventEmitter<User>();

  onSubmit() {
    this.submit.emit(this.model);
    this.reset();
  }

  reset() {
    this.model = new User();
    this.modelChange.emit(this.model);
  }
}
