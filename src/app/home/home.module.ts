import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeBanComponent } from '../components/home/homeBanner/homeBan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    HomeBanComponent
  ],
  providers: [

  ]
})

export class HomeModule {

}
