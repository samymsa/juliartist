export class User {

  constructor(
    public honorificPrefix: string = '',
    public familyName: string = '',
    public givenName: string = '',
    public email: string = '',
    public username: string = '',
    public password: string = '',
    public passwordConfirm: string = '',
    public streetAddress: string = '',
    public postalCode: string = '',
    public city: string = '',
    public tel: string = ''
  ) { }

  reset() {
    this.honorificPrefix = '';
    this.familyName = '';
    this.givenName = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.passwordConfirm = '';
    this.streetAddress = '';
    this.postalCode = '';
    this.city = '';
    this.tel = '';
  }

}
