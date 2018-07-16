import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import element-module
import { ElModule } from 'element-angular';
// if you use webpack, import style
import 'element-angular/theme/index.css';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { HomeBanComponent } from '../components/home/homeBanner/homeBan.component';
import { HomePopFilmComponent } from '../components/home/homePopFilm/homePopFilm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    HomeBanComponent,
    HomePopFilmComponent
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule {

}
