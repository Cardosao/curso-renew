import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lowercase } from '../../pipes/lowercase';

@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
  providers: [Lowercase],
})

export class TestePage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello TestePage Page');
  }

}
