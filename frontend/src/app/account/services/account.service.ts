import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Account } from '../models/account';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  login(data: Partial<Account>): Observable<any> {
    return this.http.post(environment.backendAuth.login, data);
  }

  register(data: Partial<Account>): Observable<any> {
    return this.http.post(environment.backendAuth.register, data);
  }

  updateAccount(data: Partial<Account>): Observable<any> {
    return this.http.put(environment.backendAuth.updateAccount, data);
  }
}
