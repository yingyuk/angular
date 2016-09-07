/*
* @Author: yukyuk
* @Date:   2016-09-07 00:14:49
* @Last Modified by:   yukyuk
* @Last Modified time: 2016-09-07 16:49:06
*/

'use strict';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
