import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Storage} from "@ionic/storage";


/**
 * Generated class for the IssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iss',
  templateUrl: 'iss.html',

})
export class IssPage {

  location: Array<{timestamp: number, latitude: string, longitude: string}>;
  date: Date;
  timer = window.setInterval((data) => data = this.getFromStorage('issLocation'), 60000);

  constructor(private storage: Storage) {

    this.getFromStorage("issLocation");

  }

  async getFromStorage(key: string){
    await this.storage.get(key).then((data) => this.location = data);
    this.date = new Date(this.location[0].timestamp * 1000);
  }

}
