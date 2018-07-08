import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './not-found/page404';

import { HomeComponent } from './home/home.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';

import { AuthenticateService } from './config/authenticate.service';
import { PreloadRouteService } from './config/preloadRoute.service';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { preload: true }
  },
  {
    path: 'film',
    loadChildren: 'app/film/film.module#FilmModule',
    data: { preload: true }
  },
  {
    path: 'music',
    loadChildren: 'app/music/music.module#MusicModule',
    data: { preload: true }
  },
  {
    path: 'game',
    loadChildren: 'app/game/game.module#GameModule',
    data: { preload: true }
  },
  {
    path: 'profile',
    loadChildren: 'app/profile/profile.module#ProfileModule',
    canLoad: [AuthenticateService]
  },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadRouteService,
        useHash: Boolean(history.pushState) === false,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    PreloadRouteService
  ]
})
export class AppRoutesModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/