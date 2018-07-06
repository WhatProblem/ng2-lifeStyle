import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const filmRoutes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(filmRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class FilmRoutesModule {

}
