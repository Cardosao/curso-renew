import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

@Component({
  selector: 'page-error',
  templateUrl: 'error.html'
})
export class ErrorPage {

  public errorCode: string = "";
  public errorMsg: string = "";
  public url: string = "";

  constructor(public navCtrl: NavController, public navParam: NavParams, public modalCtrl: ModalController) {
    this.errorMsg = this.navParam.get("errorMsg");
    this.errorCode = this.navParam.get("errorCode");
    this.url = this.navParam.get("url");
    console.info(this.errorCode);
    this.translate(this.errorCode);
  };

  translate (code: string) {
    if (code.toString().indexOf("401") >= 0) {
      this.errorMsg = 'Acesso não permitido a url';
    } else {
      this.errorMsg = this.navParam.get("erroMsg");
      this.errorCode = this.navParam.get("erroCode");
      this.url = this.navParam.get("url");
    }
  };

  public openModal() {
    let modal = this.modalCtrl.create(ModalLoginPage);
    modal.present();
  }


  ionViewDidLoad() {

  }

}
