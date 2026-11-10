import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import {APP_CONFIG} from './shared/config/configuration'
import { GameCollection } from './services/game-collection';
import { MockGameCollection } from './services/mock-game-collection';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './services/loading-intercepter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([loadingInterceptor])),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://www.freetogame.com/api',
        //** THE THING I NEED TO CHANGE TO ALTER THE FILTER **//
        defaultFilter: 'all',
        //** ********************************************** **//
      },
    },
    {
      provide: GameCollection,
      //** THE THING I NEED TO TOGGLE WHEN I NEED TO USE THE MOCK COLLECTION **//
      useClass: GameCollection,
      //** ***************************************************************** **//
    },
  ],
};
