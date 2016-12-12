import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Login } from '../../providers/login';
// import { ApiService } from '../../providers/api-service';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
  //providers: [ApiService],
})
export class ButtonsPage {


  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello ButtonsPage Page');
  }

  // login() {
  //   this.loginFn.login();
  // }
  //
  // logout() {
  //   this.loginFn.logout();
  // }

  // listFornecedor() {
  //   this.api.load().fornecedor.getAll().then(
  //     (response) => console.log(response)
  //   ).catch(
  //     function(response) {
  //       console.log(response);
  //     }
  //     );
  // }

  // getFornecedor() {
  //   // let fornecedores: Array<string> = new Array<string>();
  //   this.loginFn.get()
  //     .then(
  //     function(response) {
  //       console.log(response);
  //     }
  //     ).catch(function(response) {
  //       console.log("DEU ERRADO> " + response.data);
  //     });
  // }

  // listFornecedor2() {
  //   this.api.load().fornecedor.list().then(
  //     (response) => {
  //       console.log(response);
  //     }
  //   ).catch(
  //     function(response) {
  //       console.log("ERRO : " + response);
  //     }
  //     );
  // }


}
