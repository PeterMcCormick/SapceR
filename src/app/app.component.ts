import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";

import { HomePage } from '../pages/home/home';
import { LaunchListPage} from "../pages/launch-list/launch-list";
import { IssPage} from "../pages/iss/iss";
import {PeoplePage} from "../pages/people/people";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        {title: "Picture of the Day", component: HomePage},
        {title: "Launch List", component: LaunchListPage},
        {title: "ISS Location", component: IssPage},
        {title: "People in Space", component: PeoplePage},
      ];

    });
    var people = [
      {name: "Anton Shkaplerov", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Anton_Shkaplerov"},
      {name: "Scott Tingle", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Scott_D._Tingle"},
      {name: "Norishige Kanai", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Norishige_Kanai"},
      {name: "Oleg Artemyev", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Oleg_Artemyev"},
      {name: "Andrew Feustel", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Andrew_J._Feustel"},
      {name: "Richard Arnold", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Richard_R._Arnold"}
    ];

    this.storage.set('people', people);
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

