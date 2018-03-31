import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {
  testArray: LaunchItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var mockRocketForTesting1 = new LaunchItem("GSLV Mk II", "GSAT-6A", "March 29, 2018 11:26:00 UTC",
      "Satish Dhawan Space Centre Second Launch Pad", "GSAT-6A is and Indian geostationary communications satellite for multi-media mobile applications. Weighing about 2000 kg, satellite is expected to operate in orbit for 9 years.")

    var mockRocketForTesting2 = new LaunchItem("Soyuz-2-1v", "VNIIEM EMKA", "March 29, 2018 16:30:00 UTC",
      "43/3 (43L), Plesetsk Cosmodrome, Russia", "The payload for the Soyuz-2-1v launch is a small reconnaissance satellite developed by VNIIEM and known by the acronym EMKA (\"Experimental Small Space Apparatus\"). Launch was originally scheduled for October and then slipped to November, December and eventually January due to technical problems with the payload.")

    this.testArray = [mockRocketForTesting1, mockRocketForTesting2];
  }


}

export class LaunchItem{

  constructor(private _rocket: string, private _payload: string, private _date: string, private _location: string,
              private _description: string){

  }

  get rocket(): string {
    return this._rocket;
  }

  get payload(): string {
    return this._payload;
  }

  get date(): string {
    return this._date;
  }

  get location(): string {
    return this._location;
  }

  get description(): string {
    return this._description;
  }
}
