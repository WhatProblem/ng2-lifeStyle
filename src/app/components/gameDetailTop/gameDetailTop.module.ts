import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import element-module
import { ElModule } from 'element-angular';
// if you use webpack, import style
import 'element-angular/theme/index.css';

import { GameDetailTopComponent } from './gameDetailTop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ElModule.forRoot()
  ],
  declarations: [
    GameDetailTopComponent
  ],
  exports: [
    GameDetailTopComponent
  ]
})
export class GameDetailTopModule {

}
