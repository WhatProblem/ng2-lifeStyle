import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './homeDetail/homeDetail.component';

const homeRoutes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home', url: 'home', name: '首页' }
  },
  {
    path: 'home/homeDetail',
    // component: HomeDetailComponent,
    data: { title: 'homeDetail', url: 'homeDetail', name: '详情' },
    children: [
      {
        path: '',
        component: HomeDetailComponent
      },
      {
        path: ':id',
        component: HomeDetailComponent
      }
    ]
  }
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
