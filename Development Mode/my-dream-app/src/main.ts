import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { iCommonModule } from './app/common.module';

// if (environment.production) {
//   enableProdMode();
// }
enableProdMode();
platformBrowserDynamic().bootstrapModule(iCommonModule);
