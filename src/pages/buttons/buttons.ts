import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';
//import { Login } from '../../providers/login';
import { User } from '../../model/user';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
  providers: [ModalLoginPage],
})
export class ButtonsPage {

  constructor(public navCtrl: NavController, public modal: ModalLoginPage) {

  }

  ionViewDidLoad() {
    console.log('Hello ButtonsPage Page');
  }

  login() {
    let user = new User();
    user.setEmail("fabiano@cardosao.com");
    user.setPassword("123");
    this.modal.loginExterno(user);
  }

  logout() {
    this.modal.logout();
  }

  listFornecedor() {
    this.modal.listFornecedor();
  }

  getFornecedor() {
    this.modal.getFornecedor();
  }

  listFornecedor2() {
    this.modal.listFornecedor2();
  }


}
