import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './homeDetail/homeDetail.component';


const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/:id',
    component: HomeDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class HomeRoutesModule {

}
