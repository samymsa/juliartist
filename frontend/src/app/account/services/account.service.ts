import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(environment.backendLogin, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.backendRegister, data);
  }

  updateAccount(data: any): Observable<any> {
    return this.http.put(environment.backendUpdateAccount, data);
  }
}
