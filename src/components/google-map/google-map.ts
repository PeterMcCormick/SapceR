import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  @ViewChild("map") mapElement;
  map: any;
  @Input() latitude;
  @Input() longitude;

  constructor() {
  }

  ngOnInit() {
    this.initMap();
  }

  initMap() {

    let coords = new google.maps.LatLng(this.latitude,this.longitude);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })
  }
}
