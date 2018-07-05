import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import element-module
import { ElModule } from 'element-angular';
// if you use webpack, import style
import 'element-angular/theme/index.css';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';

import { HeaderBarComponent } from './headerBar/headerBar.component';

import { PageNotFoundComponent } from './not-found/page404';
import { AppRoutesModule } from './appRoutes.module';
import { HomeModule } from './home/home.module';

import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { DialogService } from './dialog.service';

import '../styles/styles.scss';
import '../styles/headings.css';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // HomeModule,
    HomeModule,
    
    HeroesModule,
    LoginRoutingModule,
    AppRoutesModule,
    ElModule.forRoot(),

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    // ...environment.showDevModule ? [DevModuleModule] : [],
  ],
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    DialogService
  ]
})
export class AppModule { }
