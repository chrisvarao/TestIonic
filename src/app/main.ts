import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import { module, inject } from 'angular/angular'

platformBrowserDynamic().bootstrapModule(AppModule);
