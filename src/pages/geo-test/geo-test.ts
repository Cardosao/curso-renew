import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-geo-test',
  templateUrl: 'geo-test.html'
})
export class GeoTestPage {

  watch: any;
  lat: any;
  log: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoTestPage');
  }

  getLoc(): void {
    Geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.log = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.watch = Geolocation.watchPosition();
    this.watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }

}
