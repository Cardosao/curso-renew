import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpInterceptor } from './http-interceptor';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
//Classe que substitui o Http para requisições com token


@Injectable()
export class ApiService {

  public SERVICE_URL: string;
  public token: any;

  constructor(public http: HttpInterceptor, public storage: Storage, public loginFn: Login) {
    console.log('Hello ApiService Provider');
    this.SERVICE_URL = 'http://localhost:8080/safe-pocket';
  }

  // public errorRedirect(err, url)  {
  //   this.navCtrl.push(ErrorPage, {
  //     message: "Erro ao acessar o recurso",
  //     errorCode: err.status,
  //     erroMsg: err,
  //     url: url,
  //   });
  // }

  login(user: User) {
    this.loginFn.login(user);
  }

  logout() {
    this.loginFn.logout();
  }

  load() {

    //variaveis acessiveis aos callbacks
    let http = this.http;
    let url = this.SERVICE_URL;
    //let navCtrl = this.navCtrl;

    return {
      fornecedor: {
        getAll: function() {
          return new Promise((resolve, reject) => {
            http.get(url + '/rest/fornecedor/')
              .map(res => res.json())
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                //errorRedirect(err, url);
                console.log("ErrorStatus: [" + err.status + "] " + err);
                reject(err);
              });;
          });
        },
        listAll: function() {
          return new Promise((resolve, reject) => {
            http.get(url + '/rest/fornecedor/')
              .map(res => {
                var data = res.json();
                console.log("CONTEUDO: " + data);

                  resolve(data);
              });
          });
        },

        list: function() {
          return new Promise(http.list(url + '/rest/fornecedor/'));
        },
        get: function(id) {
          return new Promise(resolve => { http.get(url + '/rest/fornecedor/' + id) });
        },
        dtoByFilter: function(fornecedorSeletor) {
          return new Promise(resolve => { http.post(url + '/rest/fornecedor/dto', fornecedorSeletor) });
        },
        create: function(usuario) {
          return new Promise(resolve => { http.post(url + '/rest/usuario/create', usuario) });
        },
        update: function(usuario) {
          return new Promise(resolve => { http.put(url + '/rest/usuario/' + usuario.id, usuario) });
        },
        remove: function(id) {
          return new Promise(resolve => { http.delete(url + '/rest/usuario/' + id) });
        }
      },
      usuario: {
        login: function(data) {
          return new Promise(resolve => { http.post(url + '/auth/login', data) });
        },
        get: function(id) {
          return new Promise(resolve => { http.get(url + '/rest/usuario/' + id) });
        },
        create: function(usuario) {
          return new Promise(resolve => { http.post(url + '/rest/usuario/create', usuario) });
        },
        update: function(usuario) {
          return new Promise(resolve => { http.put(url + '/rest/usuario/' + usuario.id, usuario) });
        },
        remove: function(id) {
          return new Promise(resolve => { http.delete(url + '/rest/usuario/' + id) });
        }
      },
    };
  }




}
