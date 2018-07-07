import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicComponent } from './music.component';

const musicRoutes: Routes = [
  {
    path: '',
    component: MusicComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(musicRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MusicRoutesModule {

}
