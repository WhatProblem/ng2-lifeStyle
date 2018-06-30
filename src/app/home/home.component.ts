import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/opreators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Home, HomeService } from './home.service';


@Component({
  selector: 'home-list',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public heroes: object = [];
  private selectedId: number;

  constructor(
    private service: HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
    console.log(this.heroes);
    let routeParams = this.route.params['value'];
    this.selectedId = routeParams.id;
    console.log(this.selectedId);
    console.log(routeParams);
  }
}
