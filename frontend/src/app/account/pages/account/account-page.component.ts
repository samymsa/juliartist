import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'account-page',
  templateUrl: './account-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent {}
