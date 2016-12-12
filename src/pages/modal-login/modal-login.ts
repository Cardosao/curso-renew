  import { Component } from '@angular/core';
  import { NavController, ViewController } from 'ionic-angular';
  import { Login } from '../../providers/login';
  import { ApiService } from '../../providers/api-service';
  import { User } from '../../model/user';

  @Component({
    selector: 'page-modal-login',
    templateUrl: 'modal-login.html',
    providers: [ApiService, Login],
  })
export class ModalLoginPage {

    public user:User = new User();

    constructor(public navCtrl: NavController, public view: ViewController, public loginFn: Login, public api: ApiService) { }

    ionViewDidLoad() {
      console.log('Hello ModalLoginPage');
    }

    close() {
      this.view.dismiss();
    }

    login() {
      console.info(this.user);
      this.loginFn.login(this.user).then((data)=>{
        this.view.dismiss();
      }).catch((err)=>{
        
      });
    }

    logout() {
      this.loginFn.logout();
    }

    listFornecedor() {
      this.api.load().fornecedor.getAll().then(
        (response) => console.log(response)
      ).catch(
        function(response) {
          console.log(response);
        }
        );
    }

    getFornecedor() {
      // let fornecedores: Array<string> = new Array<string>();
      this.loginFn.get()
        .then(
        function(response) {
          console.log(response);
        }
        ).catch(function(response) {
          console.log("DEU ERRADO> " + response.data);
        });
    }

    listFornecedor2() {
      this.api.load().fornecedor.list().then(
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
