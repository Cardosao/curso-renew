import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { HttpInterceptor } from './http-interceptor';
import { User } from '../model/user';

import 'rxjs/add/operator/map';


@Injectable()
export class Login {

  public urlBase: string;

  public logado: boolean = false;
  public headers: Headers;

  public tokenRqs: any;
  public token: any;
  public url: string;
  public json: string;
  public data: string;

  constructor(public http: HttpInterceptor, public storage: Storage) {
    this.urlBase = "http://localhost:8080/safe-pocket";
    this.url = "http://localhost:8080/safe-pocket";
    this.headers = new Headers();
  }

  public login(user:User) {

    let responseServer = new Promise((resolve, reject) => {
      let body = JSON.stringify(user);

      this.headers.append('Content-Type', 'application/json; charset=utf-8');

      this.http.post(this.urlBase + '/login', body)
        .map(res => res.json())
        .subscribe(res => {
          this.token = res.token;
          console.log("TOKEN: " + this.token);
          this.storage.set('token', this.token);
          localStorage.setItem('token', this.token);
          resolve(res);
        }, (err) => {
          console.log("NAO DEU CERTO2> " + err);
          reject(err);
        });

    });
    console.log("FIM: " + responseServer);
    return responseServer;
  }

  /**
  * Classe de teste de conexao
  */
  public get() {

    console.log("URL: " + this.url);

    let body = JSON.stringify({
      "registros": 3,
      "pagina": 1,
      "orderField": "nome",
      "orderType": "asc"
    });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    //let url = this.urlBase + '/rest/fornecedor';

    //se já tem dados
    // if (this.data) {
    //   console.log("JA TEM DADOS");
    //   return Promise.resolve(this.data);
    // }

    //se não há dados
    return new Promise(resolve => {
      this.http.post(this.urlBase + '/rest/fornecedor' , body, ) //{ headers: headers }
        .map(res => res.json())
        .subscribe(res => {
          this.data = res;
          resolve(this.data);
        });
    });

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('X-Authorization');

    this.storage.set('token','');
    this.storage.remove('token');
    this.storage.remove('X-Authorization');

    this.headers.delete('X-Authorization');
    this.headers.delete('token');

    this.storage.clear();
    console.log("TOKEN1: " + localStorage.getItem('token'));
    this.storage.get('token').then(
      (data) => console.log("TOKEN2: " + data)
    );
  }


}
