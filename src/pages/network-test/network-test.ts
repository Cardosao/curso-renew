import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Network, Diagnostic } from 'ionic-native';

declare var Connection: any;

@Component({
  selector: 'page-network-test',
  templateUrl: 'network-test.html',
  //providers: [Network],
})
export class NetworkTestPage {

  connType: string;
  name: string;
  info: string;
  diag: any;

  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('Hello NetworkTestPage Page');
  }

  check() {

    if (Network.type == Connection.WIFI) {
      this.connType = Network.type;
    } else {
      this.connType = "Não é WIFI";
    }

    this.diag = JSON.stringify(Diagnostic.isWifiAvailable());

  }

}
