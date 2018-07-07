import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileRoutesModule } from './profileRoutes.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutesModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [

  ]
})

export class ProfileModule {

}
