import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  defaultImage: Picture;



  constructor(public navCtrl: NavController) {
    this.defaultImage = new Picture("Steve Mazlin, Mark Hanson, Warren Keller, Rex Parker, Tommy Tse, \n" +
      "and Peter Proulx (SSRO / PROMPT / CTIO)","Carved by a bright young star in Orion's dusty molecular clouds, NGC 2023 is often overlooked in favor of the nearby dramatic silhouette of the Horsehead Nebula. In its own right it is seen as a beautiful star forming emission and reflection nebula though, a mere 1500 light-years distant. Surprisingly colorful and complex filaments are detailed in this rare NGC 2023 portrait. Scattered points of emission are also from the region's Herbig-Haro objects, associated with the energetic jets from newborn stars. The sharp telescopic view spans about 10 light-years at the estimated distance of NGC 2023. Off the right edge of the frame lies the more familiar cosmic Horsehead.",
      "NGC 2023 in the Horsehead's Shadow", "assets/imgs/Horsehead.jpg")



   // Add picture of the day call
  }

  // Add local storage for image

}

class Picture {

  constructor(private _copyright: string, private _explanation: string,  private _title: string, private _location: string){

  }

  get copyright(): string {
    return this._copyright;
  }

  get explanation(): string {
    return this._explanation;
  }

  get title(): string {
    return this._title;
  }

  get location(): string {
    return this._location;
  }
}
