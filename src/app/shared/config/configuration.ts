import { InjectionToken } from '@angular/core';

export interface AppConfig {
apiBaseUrl: string;
defaultFilter: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
