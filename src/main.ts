/*
* @Author: Yuk
* @Date:   2016-09-25 14:07:47
* @Last Modified by:   Yuk·
* @Last Modified time: 2016-09-25 14:10:07
*/

'use strict';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
