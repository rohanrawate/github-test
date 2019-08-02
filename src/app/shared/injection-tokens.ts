import { InjectionToken } from '@angular/core';
import { AppConfigGlobal } from './types/app-config.type';

export const APP_CONFIG = new InjectionToken<AppConfigGlobal>('APP_CONFIG');
