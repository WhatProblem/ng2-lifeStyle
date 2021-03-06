import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmComponent } from './film.component';

const filmRoutes: Routes = [
  {
    path: '',
    component: FilmComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(filmRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class FilmRoutesModule {

}
