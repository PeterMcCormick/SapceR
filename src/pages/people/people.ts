import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage} from "@ionic/storage";
import { InAppBrowser } from "@ionic-native/in-app-browser";

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})

export class PeoplePage {
  numOfPeople: number;
  people: Array<{name: string, spaceCraft: string, wikiPage: string}>;
  peopleFromStorage;

  constructor(private inAppBrowser: InAppBrowser, private storage: Storage) {

    this.getFromStorage('people');

  }

  openWikiPage(page){
    this.inAppBrowser.create(page);

  }
  async getFromStorage(key: string){
    await this.storage.get(key).then((data) => this.peopleFromStorage = data);
    this.numOfPeople = this.peopleFromStorage.length;
  }

}
