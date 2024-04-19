export class SetAccessToken {
  static readonly type = '[Account] Set Access Token';
  constructor(public payload: string) {}
}
