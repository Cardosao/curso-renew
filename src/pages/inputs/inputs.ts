import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
  providers: [ModalLoginPage],
})
export class InputsPage {

  private nome:string = "";
  private senha:string = "";

  constructor(public navCtrl: NavController, public alert: AlertController, public modal: ModalLoginPage) {}

  ionViewDidLoad() {
    console.log('Hello InputsPage Page');
  }

  public showAlert() {
    let alerta = this.alert.create({
      title: "Bem vindo " + this.nome,
      message: "Sua senha é: " + this.senha,
      buttons: ['OK'],
    });
    alerta.present();
  }

  public listarFornecedores() {
    this.modal.listFornecedor();
  }

}
