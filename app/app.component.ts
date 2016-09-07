/*
 * @Author: yukyuk
 * @Date:   2016-09-07 00:12:44
 * @Last Modified by:   yukyuk
 * @Last Modified time: 2016-09-07 16:50:56
 */

'use strict';
import {
  Component
} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
