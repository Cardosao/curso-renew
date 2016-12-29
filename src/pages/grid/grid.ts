import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';

@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class GridPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GridPage Page');
  }

  pushPage () : void {
    this.navCtrl.push(CardsPage);
  }

}
