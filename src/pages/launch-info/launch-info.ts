import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LaunchItem} from "../launch-list/launch-list";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the LaunchInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-info',
  templateUrl: 'launch-info.html',
})
export class LaunchInfoPage {
  launchItem: LaunchItem;

  constructor(public navCtrl: NavController, public navParams : NavParams, private inAppBrowser: InAppBrowser) {
    this.launchItem = navParams.data;

  }

  openWikiPage(page){
    this.inAppBrowser.create(page);

  }


}
