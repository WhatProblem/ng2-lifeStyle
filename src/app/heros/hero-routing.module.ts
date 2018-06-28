import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroRoutes: Routes = [
  {
    path: 'heros',
    component: HeroListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      heroRoutes
    )
  ]
})

export class HeroRoutingModule {

}
