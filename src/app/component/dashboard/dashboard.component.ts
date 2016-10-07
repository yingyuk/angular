/*
* @Author: Yuk
* @Date:   2016-09-11 23:19:04
* @Last Modified by:   Yuk·
* @Last Modified time: 2016-10-07 11:35:48
*/

'use strict';
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
