/*
 * @Author: yukyuk
 * @Date:   2016-09-07 17:56:38
 * @Last Modified by:   yukyuk
 * @Last Modified time: 2016-09-07 18:05:04
 */

'use strict';
import {
  Component,
  Input
} from '@angular/core';

import {
  Hero
} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
