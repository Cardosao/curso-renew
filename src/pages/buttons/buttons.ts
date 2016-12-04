import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Buttons page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ButtonsPage Page');
  }

}