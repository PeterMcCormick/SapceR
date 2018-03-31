import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LaunchItem} from "../launch-list/launch-list";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, launchItem: LaunchItem) {
    this.launchItem = launchItem;
  }


}
