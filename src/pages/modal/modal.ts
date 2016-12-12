import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello ModalPage Page');
  }

  public openModal() {
    let modal = this.modalCtrl.create(ModalLoginPage);
    modal.present();
  }

}
