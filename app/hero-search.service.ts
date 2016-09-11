/*
* @Author: Yuk
* @Date:   2016-09-11 23:37:46
* @Last Modified by:   Yuk
* @Last Modified time: 2016-09-11 23:56:28
*/

'use strict';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map((r: Response) => r.json().data as Hero[]);
  }
}
