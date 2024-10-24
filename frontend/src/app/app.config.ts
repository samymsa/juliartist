import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { AuthInterceptor } from './auth.interceptor';
import { ShoppingCartState } from './shopping-cart/shopping-cart.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    importProvidersFrom(
      NgxsModule.forRoot([], {
        developmentMode: !environment.production,
      }),
      NgxsStoragePluginModule.forRoot({
        keys: [ShoppingCartState],
      }),
    ),
  ],
};
