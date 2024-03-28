import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    importProvidersFrom(NgxsModule.forRoot([])),
  ],
};
