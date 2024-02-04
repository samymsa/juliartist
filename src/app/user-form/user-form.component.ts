import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  honorificPrefix = '';
  familyName = '';
  givenName = '';
  streetAddress = '';
  postalCode = '';
  city = '';
  email = '';
  tel = '';
  username = '';
  password = '';
  passwordConfirm = '';
}
