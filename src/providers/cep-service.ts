import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { HttpInterceptor } from './http-interceptor';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {


  constructor(private http: Http) {
    console.log('Hello CepService Provider');
  }

  public getByFilter(cep: string): Promise<Response> {
    let url: string = "http://viacep.com.br/ws/";
    let formato: string = "/json";
    let uri: string = url + cep + formato;
    return this.http.get(uri).toPromise();
  }

}
