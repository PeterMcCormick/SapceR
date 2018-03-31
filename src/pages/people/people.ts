import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  people: Array<{name: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = [
      {name: "James Harden", component: ""},
      {name: "Pavel Bure", component: ""},
      {name: "Johann Leichler", component: ""},
      {name: "Hishamoto Orinzato", component: ""},
      {name: "Sir Elton John", component: ""},
      {name: "John Armstrong", component: ""}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

}
