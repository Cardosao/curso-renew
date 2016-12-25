import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('Carregando InicioPage Page');
    this.presentLoading();

  }

  ionViewDidLeave() {
    console.log('Deixando InicioPage Page');
    this.presentLoading();

  }
  ionViewDidEnter() {
    console.log('Entrando InicioPage Page');
    this.presentLoading();

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

}
