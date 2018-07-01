import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';
import { Observable }            from 'rxjs/Observable';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
        [class.selected]="crisis.id === selectedId">
        <a [routerLink]="[crisis.id]">
          <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
        </a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crises$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      });
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/