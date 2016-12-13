import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';

@Component({
  selector: 'page-nav-test',
  templateUrl: 'nav-test.html'
})
export class NavTestPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NavTestPage Page');
  }

  openPage() {
    this.navCtrl.push(CardsPage, {
      msg: "PARAMETRO DO PUSH!",
    });
  }

}
