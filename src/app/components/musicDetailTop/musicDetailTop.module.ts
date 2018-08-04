import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import element-module
import { ElModule } from 'element-angular';
// if you use webpack, import style
import 'element-angular/theme/index.css';

import { MusicDetailTopComponent } from './musicDetailTop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ElModule.forRoot()
  ],
  declarations: [
    MusicDetailTopComponent
  ],
  exports: [
    MusicDetailTopComponent
  ]
})
export class MusicDetailTopModule {

}
