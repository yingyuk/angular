/*
 * @Author: yukyuk
 * @Date:   2016-09-07 18:22:50
 * @Last Modified by:   yukyuk
 * @Last Modified time: 2016-09-07 18:34:12
 */

'use strict';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
