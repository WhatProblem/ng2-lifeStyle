import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './homeDetail/homeDetail.component';

const homeRoutes = [
  {
    path: 'home',
    // component: HomeComponent,
    data: { title: 'home' },
    children: [
      {
        path: 'homeDetail',
        component: HomeDetailComponent,
        data: { title: 'homeDetail' }
      },
      {
        path: '',
        component: HomeComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class HomeRoutesModule {

}
