import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  public getMessage(form: AbstractControl, fieldName: string): string | null {
    const field = fieldName ? form.get(fieldName) : form;

    if (!field || !field.errors || !field.touched || !field.dirty) {
      return null;
    }

    if (field.errors['required']) {
      return 'Ce champ est obligatoire';
    }

    if (field.errors['email']) {
      return `L'email est incorrect`;
    }

    if (field.errors['invalidCredentials']) {
      return 'Les identifiants sont incorrects';
    }

    return null;
  }
}
