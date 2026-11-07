import { InjectionToken } from '@angular/core';

export interface AppConfig {
apiBaseUrl: string;
defaultFilter: string; //gonna do something with this later
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
