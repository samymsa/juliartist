import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  errorMessages: Record<string, string> = {
    required: 'Ce champ est obligatoire',
    email: "L'email est incorrect",
    invalidCredentials: 'Les identifiants sont incorrects',
    passwordMatch: 'Les mots de passe ne correspondent pas',
    minlength: 'Ce champ doit contenir au moins {requiredLength} caractères',
    maxlength: 'Ce champ doit contenir au maximum {requiredLength} caractères',
    pattern: 'Le format est invalide',
    unknown: 'Une erreur est survenue',
  };

  public getMessage(form: AbstractControl, fieldName: string): string | null {
    const field = fieldName ? form.get(fieldName) : form;

    if (!field || !field.errors || !field.touched) {
      return null;
    }

    for (const [key, value] of Object.entries(this.errorMessages)) {
      if (field.errors[key]) {
        return value;
      }
    }

    return null;
  }

  public getErrorMessage(key: string): string {
    return this.errorMessages[key] || this.errorMessages['unknown'];
  }
}
