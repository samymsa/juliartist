export class User {

  constructor(
    public honorificPrefix: string = '',
    public familyName: string = '',
    public givenName: string = '',
    public email: string = '',
    public username: string = '',
    public password: string = '',
    public streetAddress: string = '',
    public postalCode: string = '',
    public city: string = '',
    public tel: string = ''
  ) { }

}
