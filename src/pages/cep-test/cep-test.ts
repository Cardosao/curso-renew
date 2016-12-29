import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CepService } from '../../providers/cep-service';

@Component({
  selector: 'page-cep-test',
  templateUrl: 'cep-test.html'
})
export class CepTestPage {

  public listaCep: Array<Cep> = new Array<Cep>();
  public cep: string = '88113800';

  constructor(public navCtrl: NavController, private cepService: CepService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CepTestPage');
  }

  buscar(cep: string): void {
    this.cepService.getByFilter(cep)
      .then((res) => {
        //Reponse completo
        console.log(res);
        let json = res.json();
        this.listaCep.push(new Cep(json));
        console.log(json);
        console.log(json.localidade);
      }).catch((err) => {
        console.log(err);
      });
  }

  clear() : void {
    this.listaCep = new Array<Cep>();
  }

}

export class Cep {

  bairro: string;
  cep: string;
  complemento: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  uf: string;
  unidade: string;

  constructor(json: any) {
    this.bairro = json.bairro;
    this.cep = json.cep;
    this.complemento = json.complemento;
    this.gia = json.gia;
    this.ibge = json.ibge;
    this.localidade = json.localidade;
    this.logradouro = json.logradouro;
    this.uf = json.uf;
    this.unidade= json.unidade;
  }
}
