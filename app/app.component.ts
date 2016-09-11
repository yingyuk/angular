/*
* @Author: Yuk
* @Date:   2016-09-11 23:14:05
* @Last Modified by:   Yuk
* @Last Modified time: 2016-09-11 23:55:10
*/

'use strict';
import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
