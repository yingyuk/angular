/*
* @Author: Yuk¡¤
* @Date:   2016-09-25 14:15:03
* @Last Modified by:   yukyuk
* @Last Modified time: 2016-10-07 11:57:13
*/

'use strict';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { HomeComponent }         from './component/home/home.component';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { HeroesComponent }      from './component/heroes/heroes.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';
import { HeroService }          from './service/hero.service';
import { HeroSearchComponent }  from './component/hero-search/hero-search.component';
import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
