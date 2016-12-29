import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//para adicionar pipes, precisa importar Type
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }


}
