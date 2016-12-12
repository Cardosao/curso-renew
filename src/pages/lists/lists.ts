import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Lists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

  public personagens: Array<string>;
  public avatar: any = "../../assets/img/d3.jpg";

  constructor(public navCtrl: NavController) {
    this.personagens = [
      'Monk',
      'Barbarian',
      'Wizard',
      'Witch Doctor',
      'Crusader',
      'Demon Hunter',
      'Necromancer'
    ];


  }

  ionViewDidLoad() {
    console.log('Hello ListsPage Page');
  }

}
