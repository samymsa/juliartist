import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { tap } from 'rxjs';
import { SetAccessToken } from './account/account.actions';
import { AccountState } from './account/account.state';

@Injectable()
export class AuthInterceptor {
  constructor(private store: Store) {}

  get accessToken() {
    return this.store.selectSnapshot<string>(AccountState.getAccessToken);
  }

  set accessToken(token: string) {
    this.store.dispatch(new SetAccessToken(token));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
    }

    return next.handle(req).pipe(
      tap((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse && evt.headers.has('Authorization')) {
          const authHeader = evt.headers.get('Authorization');
          this.accessToken = authHeader?.split(' ')[1] || this.accessToken;
        }
      }),
    );
  }
}
