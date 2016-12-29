import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Network } from 'ionic-native';

//export declare var this.con: any;

@Component({
  selector: 'page-network-test',
  templateUrl: 'network-test.html',
  //providers: [Network],
})
export class NetworkTestPage {

  name: string;
  info: any;
  connType: string;
  con: any = {
    WIFI: 'wifi',
    CELL_4G: '4g',
    CELL_3G: '3g',
    CELL_2G: '2g',
    NONE: 'none',
    ETHERNET: 'ethernet',
    CELL: 'cell'
  };

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.name = Network.name;
  }

  ionViewDidLoad() {
    console.log('Hello NetworkTestPage Page');
  }

  check() {

    if (Network.type == this.con.WIFI) {
       this.connType = 'Internet do tipo: WIFI';
    } else if (Network.type == this.con.CELL_4G) {
      this.connType = 'Internet do tipo: 4G';
    } else if (Network.type == this.con.CELL_3G) {
      this.connType = 'Internet do tipo: 3G';
    } else if (Network.type == this.con.CELL_2G) {
      this.connType = 'Internet do tipo: 2G';
    } else if (Network.type == this.con.NONE) {
      this.connType = 'Não está conectado na internet';
    } else if (Network.type == this.con.ETHERNET) {
      this.connType = 'Internet do tipo: ETHERNET';
    } else if (Network.type == this.con.CELL) {
      this.connType = 'Internet do tipo: Conexão Genérica';
    } else {
      this.connType = "Outro tipo de internet";
    }

    this.info = Network.type;

  }

}
