import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-abas',
  templateUrl: 'abas.html'
})
export class AbasPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AbasPage Page');
  }

}
