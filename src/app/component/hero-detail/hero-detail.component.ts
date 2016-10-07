/*
 * @Author: yukyuk
 * @Date:   2016-09-07 17:56:38
 * @Last Modified by:   yukyuk
 * @Last Modified time: 2016-10-07 11:36:21
 */

'use strict';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero }        from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }

  goBack(): void {
    window.history.back();
  }
}
