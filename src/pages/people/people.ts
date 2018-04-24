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
  peopleFromStorage: Array<{name: string, spaceCraft: string, wikiPage: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser, private storage: Storage) {

    // this.people = [
    //   {name: "Anton Shkaplerov", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Anton_Shkaplerov"},
    //   {name: "Scott Tingle", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Scott_D._Tingle"},
    //   {name: "Norishige Kanai", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Norishige_Kanai"},
    //   {name: "Oleg Artemyev", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Oleg_Artemyev"},
    //   {name: "Andrew Feustel", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Andrew_J._Feustel"},
    //   {name: "Richard Arnold", spaceCraft: "ISS", wikiPage: "https://en.wikipedia.org/wiki/Richard_R._Arnold"}
    // ];
    // this.numOfPeople = this.people.length;
    // this.storage.set('people', this.people);
    this.getFromStorage('people');


  }

  openWikiPage(page){
    this.inAppBrowser.create(page);

  }
  async getFromStorage(key: string):Array{
    await this.storage.get(key).then((data) => this.peopleFromStorage = data);

  }

}
