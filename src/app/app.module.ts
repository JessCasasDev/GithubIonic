import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/user-details/user-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubProvider } from '../providers/github';

@NgModule({
  declarations: [
      MyApp,
      UsersPage,
      UserDetailsPage
  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      UsersPage,
      UserDetailsPage
  ],

  providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      GithubProvider
  ]
})
export class AppModule {}
