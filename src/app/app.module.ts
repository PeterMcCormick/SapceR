import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LaunchListPage} from "../pages/launch-list/launch-list";
import {LaunchInfoPage} from "../pages/launch-info/launch-info";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IssPage} from "../pages/iss/iss";
import { PeoplePage} from "../pages/people/people";

import { GoogleMapComponent } from '../components/google-map/google-map';
import { RestServiceProvider } from '../rest-service/rest-service';
import {IonicStorageModule} from "@ionic/storage";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LaunchListPage,
    LaunchInfoPage,
    GoogleMapComponent,
    IssPage,
    PeoplePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IssPage,
    PeoplePage,
    LaunchListPage,
    LaunchInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    RestServiceProvider,
    Storage
  ]
})
export class AppModule {}
