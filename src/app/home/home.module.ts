import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './homeDetail/homeDetail.component';

import { HomeRoutesModule } from './homeRoutes.module';
import { HomeService } from './home.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutesModule
  ],
  declarations: [
    HomeComponent,
    HomeDetailComponent
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule {

}
