import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { HomeService } from '../home.service';

@Component({
  selector: 'home-detail',
  templateUrl: './homeDetail.component.html',
  styleUrls: ['./homeDetail.component.css']
})

export class HomeDetailComponent implements OnInit {
  public hero: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HomeService
  ) { }

  ngOnInit() {
    let test = this.route.params['value']['id'];
    this.hero = this.service.getHero(test);
  }

  gotoHeroes(hero: object) {
    let heroId = hero ? hero['id'] : null;
    // this.router.navigate(['/home', { id: heroId, foo: 'foo' }]);
    this.router.navigate(['../', { id: heroId, foo: 'foo' }], { relativeTo: this.route });
  }
}
