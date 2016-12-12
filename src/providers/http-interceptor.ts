import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModalController } from 'ionic-angular';
import { ErrorPage } from '../pages/error/error';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpInterceptor {

  constructor(public http: Http, public modalCtrl: ModalController) {}

  createAuthorizationHeader(headers: Headers) {
    let token: string = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('X-Authorization', token);
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  };

  list(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return (resolve, reject) => {
      this.http.get(url, { headers: headers })
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
          console.log("ErrorStatus: [" + err.status + "] " + err);
          let modal = this.modalCtrl.create(ErrorPage, { errorCode: err.status, url: url, errorMsg: err });
          modal.present();
        });
    }
  };



  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  };

  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  };

  delete(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  };

}
