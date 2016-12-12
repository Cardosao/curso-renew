import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Grid page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class GridPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GridPage Page');
  }

}
