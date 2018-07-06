import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import element-module
import { ElModule } from 'element-angular';
// if you use webpack, import style
import 'element-angular/theme/index.css';

import { FilmComponent } from './film.component';

import { FilmRoutesModule } from './filmRoutes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilmRoutesModule,
    ElModule.forRoot()
  ],
  declarations: [
    FilmComponent
  ],
  providers: [

  ]
})

export class FilmModule {

}
