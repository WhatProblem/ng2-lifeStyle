import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const homeRoutes = [
  
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class HomeRoutesModule {

}
