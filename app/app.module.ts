/*
* @Author: yukyuk
* @Date:   2016-09-07 00:14:49
* @Last Modified by:   yukyuk
* @Last Modified time: 2016-09-07 00:14:54
*/

'use strict';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
