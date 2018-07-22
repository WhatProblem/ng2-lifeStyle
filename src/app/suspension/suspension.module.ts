import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import element-module
import { ElModule } from 'element-angular';
// if you use webpack, import style
import 'element-angular/theme/index.css';

import { SuspensionComponent } from './suspension.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ElModule.forRoot()
  ],
  declarations: [
    SuspensionComponent
  ],
  exports: [
    SuspensionComponent
  ]
})

export class SuspensionModule { }
