import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html'
})
export class ToolbarPage {

  selecionado: string;
  searchQuery: string = '';
  items: string[];
  sw: string[];
  st: string[];
  wc: string[];

/**
Devolve a lista dependendo da string recebida
*/
  getList(select: string): string[] {
    let retorno: string[] = this.sw;
    switch (select) {
      case 'starwars':
        retorno = this.sw;
        break;
      case 'startrek':
        retorno = this.st;
        break;
      case 'warcraft':
        retorno = this.wc;
        break;
    }
    return retorno;
  }

  initializeItems() {
    this.items = [
      'Angelôni',
      'Giassi',
      'Submarino',
      'Americanas',
      'Mesa Grill',
      'Subway',
      'Zabot',
      'Rio Sulênse',
      'Castríni',
      'Dafiti',
      'Cinema',
      'Farmácia',
      'Sacolão',
      'Doação'
    ];
  }

  populateList() {
    this.sw = [
      'Darth Vader',
      'Luke Skywalker',
      'Han Solo'
    ];
    this.st = [
      'James Kirk',
      'Spoky',
      'Ronda'
    ];
    this.wc = [
      'Thrall',
      'Lothar',
      'Garona'
    ];
  }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.initializeItems();
    this.populateList();
  }

  ionViewDidLoad() {
    console.log('Hello ToolbarPage Page');
  }

  openModal() {
    let m = this.modalCtrl.create(ModalLoginPage);
    m.present();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        let word = this.filterChar(val.toLowerCase());
        item = this.filterChar(item.toLowerCase().replace('/[áàãâ]/g', 'a'));
        return (item.indexOf(word) > -1);
      })
    }
  }

  /**
    Metodo que limpa caracteres utf-8
    @method
    @private
  */
  private filterChar(word: string): string {
    if (word.match(/[áàãâ]/g)) {
      word = word.replace(/[áàãâ]/g, 'a');
    }
    if (word.match(/[éèê]/g)) {
      word = word.replace(/[éèê]/g, 'e');
    }
    if (word.match(/[íìî]/g)) {
      word = word.replace(/[íìî]/g, 'i');
    }
    if (word.match(/[óòöôõ]/g)) {
      word = word.replace(/[óòöôõ]/g, 'o');
    }
    if (word.match(/[úùüû]/g)) {
      word = word.replace(/[úùüû]/g, 'u');
    }
    if (word.match(/[ç]/g)) {
      word = word.replace(/[ç]/g, 'c');
    }
    return word;
  }

}
