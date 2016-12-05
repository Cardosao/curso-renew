import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {

  private nome:string = "";
  private senha:string = "";

  constructor(public navCtrl: NavController, public alert: AlertController) {}

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

  // public logar() {
  //   this.nome = this.txtNome;
  //   this.senha = this.txtSenha;
  //   console.log(this.nome);
  //   console.log(this.senha);
  // }

}
