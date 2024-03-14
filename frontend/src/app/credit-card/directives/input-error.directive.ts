import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appInputError]',
})
export class InputErrorDirective {
  @Input() declare appInputError: AbstractControl | null;
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    if (this.appInputError?.touched && this.appInputError?.invalid) {
      this.el.nativeElement.classList.add('input-error');
    } else {
      this.el.nativeElement.classList.remove('input-error');
    }
  }
}
