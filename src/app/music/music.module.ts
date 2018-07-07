import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MusicRoutesModule } from './musicRoutes.module';
import { MusicComponent } from './music.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusicRoutesModule
  ],
  declarations: [
    MusicComponent
  ],
  providers: [

  ]
})

export class MusicModule {

}
