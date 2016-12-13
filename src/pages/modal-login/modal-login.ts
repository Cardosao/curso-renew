import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Login } from '../../providers/login';
import { ApiService } from '../../providers/api-service';
import { User } from '../../model/user';

@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html',
  //providers: [ApiService, Login],
})

export class ModalLoginPage {

  public user: User;

  constructor(public navCtrl: NavController, public view: ViewController, public _login: Login, public _api: ApiService) {
    this.user = new User();
  }

  ionViewDidLoad() {
    console.log('Hello ModalLoginPage');
  }

  public close() {
    this.view.dismiss();
  }

  public login() {
    console.info("ANTES DO LOGIN: " + JSON.stringify(this.user));
    this._login.login(this.user).then((data) => {
      this.close();
    }).catch((err) => {

    });
  }

  public loginExterno(user: User) {
    console.info(user);
    this._login.login(user).then((data) => {

    }).catch((err) => {

    });
  }

  public logout() {
    this._login.logout();
  }

  public listFornecedor() {
    this._api.load().fornecedor.getAll().then(
      (response) => console.log(response)
    ).catch(
      function(response) {
        console.log(response);
      }
      );
  }

  public getFornecedor() {
    // let fornecedores: Array<string> = new Array<string>();
    this._login.get()
      .then(
      function(response) {
        console.log(response);
      }
      ).catch(function(response) {
        console.log("DEU ERRADO> " + response.data);
      });
  }

  public listFornecedor2() {
    this._api.load().fornecedor.list().then(
      (response) => {
        console.log(response);
      }
    ).catch(
      function(response) {
        console.log("ERRO : " + response);
      }
      );
  }


}
