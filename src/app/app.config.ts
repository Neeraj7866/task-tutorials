import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { provideAuth, getAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import {provideHttpClient}from '@angular/common/http';

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideHttpClient(),

   provideRouter(
  routes,
  withInMemoryScrolling({
    scrollPositionRestoration:'top'
  })
),
    provideFirebaseApp(() =>
      initializeApp(environment.firebase)
    ),

    provideAuth(() => getAuth())

  ]

};