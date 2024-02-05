import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() title = '';
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  close($event: Event) {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
