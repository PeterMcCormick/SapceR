import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";

import { HomePage } from '../pages/home/home';
import { LaunchListPage} from "../pages/launch-list/launch-list";
import { IssPage} from "../pages/iss/iss";
import {PeoplePage} from "../pages/people/people";
import {RestServiceProvider} from "../rest-service/rest-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;
  issLocationTimer;
  timerForISSCall = window.setInterval((data) => this.issLocationTimer = this.apiCaller.get("iss_location"), 60000);
  timerForISSStorage= setInterval((data) => data = this.storage.set('issLocation', this.issLocationTimer),60000);

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage,
              private apiCaller: RestServiceProvider) {

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

      let issLocation = this.apiCaller.get("iss_location");
      let picture = this.apiCaller.get("nasa_pic_of_day");
      let people = this.apiCaller.get("people_in_space");
      let launches = this.apiCaller.get("rocket_launch")
      this.storage.set('issLocation', issLocation);
      this.storage.set('picture', picture);
      this.storage.set('people', people);
      this.storage.set('launches', launches);
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

