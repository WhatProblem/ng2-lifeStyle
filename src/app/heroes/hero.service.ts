import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Hero {
  constructor(public id: number, public name: string) { }
}

const HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

@Injectable()
export class HeroService {
  getHeroes() { return Observable.of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes()
      // (+) before `id` turns the string into a number
      .map(heroes => heroes.find(hero => hero.id === +id));
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/