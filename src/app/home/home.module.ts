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

import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { SuspensionModule } from '../suspension/suspension.module';
import { GameSuspensionModule } from '../gameSuspension/gameSuspension.module';
import { HomeRoutesModule } from './homeRoutes.module';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { HomeBanComponent } from '../components/home/homeBanner/homeBan.component';
import { HomePopFilmComponent } from '../components/home/homePopFilm/homePopFilm.component';
import { HomePopMusicComponent } from '../components/home/homePopMusic/homePopMusic.component';
import { HomePopGameComponent } from '../components/home/homePopGame/homePopGame.component';

import { HomeDetailComponent } from './homeDetail/homeDetail.component';
import { FilmDetailTopModule } from '../components/filmDetailTop/filmDetailTop.module';
import { MusicDetailTopModule } from '../components/musicDetailTop/musicDetailTop.module';
import { GameDetailTopModule } from '../components/gameDetailTop/gameDetailTop.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeRoutesModule,
    SuspensionModule,
    GameSuspensionModule,
    BreadcrumbModule,
    FilmDetailTopModule,
    MusicDetailTopModule,
    GameDetailTopModule,
    ElModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    HomeDetailComponent,
    HomeBanComponent,
    HomePopFilmComponent,
    HomePopMusicComponent,
    HomePopGameComponent,
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule {

}
