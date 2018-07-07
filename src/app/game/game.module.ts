import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './game.component';
import { GameRoutesModule } from './gameRoutes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameRoutesModule
  ],
  declarations: [
    GameComponent
  ],
  providers: [

  ]
})

export class GameModule {

}
