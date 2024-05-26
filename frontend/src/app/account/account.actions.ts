import { Account } from './models/account';

export class SetAccessToken {
  static readonly type = '[Account] Set Access Token';
  constructor(public payload: string) {}
}

export class SetAccount {
  static readonly type = '[Account] Set Account';
  constructor(public payload: Account | null) {}
}
