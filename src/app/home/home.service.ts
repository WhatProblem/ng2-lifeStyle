import { Injectable } from '@angular/core';
// import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/opreators';

export class Home {
  constructor(
    public id: number,
    public name: string
  ) { }
}

const HOMES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' }
];

@Injectable()
export class HomeService {
  getHeroes() {
    return HOMES;
  }

  getHero(id: number | string) {
    return this.getHeroes().find(hero => hero.id === +id);
  }
}
