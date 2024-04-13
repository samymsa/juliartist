import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable()
export class AuthInterceptor {
  jwtToken = '';

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.jwtToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtToken}`,
        },
      });
    }

    return next.handle(req).pipe(
      tap((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse && evt.headers.has('Authorization')) {
          const authHeader = evt.headers.get('Authorization');
          this.jwtToken = authHeader?.split(' ')[1] || this.jwtToken;
        }
      }),
    );
  }
}
