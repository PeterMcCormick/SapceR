import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IssPage} from "../pages/iss/iss";
import {PeoplePage} from "../pages/people/people";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        {title: "Picture of the Day", component: HomePage},
        {title: "Another Page", component: ""},
        {title: "ISS Location", component: IssPage},
        {title: "People in Space", component: PeoplePage}
      ];
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

