import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Network } from 'ionic-native';

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

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.name = Network.name;
  }

  ionViewDidLoad() {
    console.log('Hello NetworkTestPage Page');
  }

  check() {

    if (Network.type == Connection.WIFI) {
      this.connType = 'Internet do tipo: WIFI';
    } else if (Network.type == Connection.CELL_4G) {
      this.connType = 'Internet do tipo: 4G';
    } else if (Network.type == Connection.CELL_3G) {
      this.connType = 'Internet do tipo: 3G';
    } else if (Network.type == Connection.CELL_2G) {
      this.connType = 'Internet do tipo: 2G';
    } else if (Network.type == Connection.NONE) {
      this.connType = 'Não está conectado na internet';
    } else if (Network.type == Connection.ETHERNET) {
      this.connType = 'Internet do tipo: ETHERNET';
    } else if (Network.type == Connection.CELL) {
      this.connType = 'Internet do tipo: Conexão Genérica';
    } else {
      this.connType = "Outro tipo de internet";
    }
    this.info = "Download Maximo: " + Network.downlinkMax;

  }

}
