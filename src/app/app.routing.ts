/*
* @Author: Yuk·
* @Date:   2016-10-07 10:51:58
* @Last Modified by:   yukyuk
* @Last Modified time: 2016-10-07 11:04:58
*/

'use strict';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from './component/dashboard/dashboard.component';
import { HeroesComponent }     from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
