import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-bar-scan',
  templateUrl: 'bar-scan.html'
})
export class BarScanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  code: any;
  status: string;
  obs: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarScanPage');
  }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
        this.code = barcodeData;
    }, (err) => {
        console.log(err);
        this.status = err;
    });
  }

}
