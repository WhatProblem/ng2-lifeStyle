import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent } from './not-found/page404';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // 控制台debug
        useHash: Boolean(history.pushState) === false,
        // preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutesModule {

}
