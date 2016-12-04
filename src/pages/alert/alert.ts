import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  public nome: string = '';
  public status: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('Hello AlertPage Page');
  }

  public showAlert() {
    let alerta = this.alertCtrl.create({
      title: 'Alertas do Cardosao',
      buttons: [{
        text: 'Aceitar',
        role: 'ok',
        handler: () => {
          console.log('Aceito!');
          this.status = 'Aceito!';
        }
      }, {
          text: 'Declinar',
          role: 'cancel',
          handler: (data) => {
            console.log('Não Aceito!');
            this.status = 'Não Aceito!';
          }
        }],
      message: 'esta é uma mensagem de aviso',
    });
    alerta.present();
  }

  public showInputAlert() {
    let alerta = this.alertCtrl.create({
      title: 'Cadastro',
      inputs: [{
        name: 'txtNome',
        placeholder: 'Digite seu nome',
        label: 'NOME'
      }],
      buttons: [{
        text: 'Aceitar',
        role: 'ok',
        handler: (data) => {
          console.log('Aceito!');
          this.nome = data.txtNome;
        }
      }, {
          text: 'Declinar',
          role: 'cancel',
          handler: (data) => {
            console.log('Não Aceito!');
          }
        }],
      subTitle: 'dados do colaborador',
      message: 'Digite seus dados:',
    });
    alerta.present();
  }

}
