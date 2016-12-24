import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { ContatosPage } from '../contatos/contatos';


@Component({
  selector: 'page-abas',
  templateUrl: 'abas.html'
})
export class AbasPage {

  public inicioPage: any = InicioPage;
  public contatosPage: any = ContatosPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AbasPage Page');
  }


}
