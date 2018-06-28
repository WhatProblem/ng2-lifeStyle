import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

// import { CanDeactivateGuard } from './can-deactivate-guard.service';
// import { AuthGuard } from './auth-guard.service';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';


const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: '',
    redirectTo: '/heros',
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
        enableTracing: true
      }
    )
  ]
})

export class AppRoutingModule { }
