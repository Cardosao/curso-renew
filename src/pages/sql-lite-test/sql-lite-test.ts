import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';

import { SQLite } from 'ionic-native';

@Component({
  selector: 'page-sql-lite-test',
  templateUrl: 'sql-lite-test.html'
})
export class SqlLiteTestPage {

  public status: string;
  public database: SQLite;
  public pessoaNova: Pessoa = new Pessoa();
  public pessoaExistente: Pessoa = new Pessoa();
  public pessoas: Array<Pessoa>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.database.openDatabase({ name: "data.db", location: "default" }).then(() => {
        this.select();
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SqlLiteTestPage');
  }

  select(): void {
    this.database.executeSql('SELECT * FROM Pessoa ORDER BY data_cadastro DESC', {})
      .then((data) => {
        this.pessoas = new Array<Pessoa>();
        let size = data.rows.length;
        if (size > 0) {
          for (var i = 0; i < size; i++) {
            console.log(data.rows.item(i));
            this.pessoas.push({ id: data.rows.item(i).id, nome: data.rows.item(i).nome, dataCadastro: data.rows.item(i).data_cadastro });
          }
        }
        this.status = size + ' registros encontrados!';
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
        this.status = error.message;
      });
  }

  insert(p: Pessoa): void {
    let genId: number = new Date().getSeconds();
    this.database.executeSql('INSERT INTO Pessoa (id, nome, data_cadastro) VALUES (?,?,?)', [genId, p.nome, new Date()])
      .then((data) => {
        console.log("INSERT DONE!", JSON.stringify(data));
        this.status = 'INSERT OK!';
        this.select();
        this.pessoaNova = new Pessoa();
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
        this.status = error.message;
      });
  }

  update(p: Pessoa): void {
    this.database.executeSql('UPDATE Pessoa SET nome = ? WHERE id = ?', [p.nome, p.id])
      .then((data) => {
        console.log("Updated", JSON.stringify(data));
        this.select();
        this.pessoaExistente = new Pessoa();
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
        this.status = error.message;
      });
  }

  drop(): void {
    this.database.transaction(function(tx) {
      tx.executeSql('DROP TABLE IF EXISTS Pessoa');
      this.status = 'DROP EFETUADO!';
    });
  }

  delete(): void {
    this.database.transaction(function(tx) {
      tx.executeSql('DELETE FROM Pessoa WHERE id = 1');
      this.status = 'DELETE DO ID EFETUADO!';
    });
  }

  create(): void {
    this.database
      .executeSql('CREATE TABLE IF NOT EXISTS Pessoa'
          +'(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,'
          +' nome VARCHAR(55) NOT NULL, '
          +' data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)'
          , {})
      .then((data) => {
        console.log("TABLE CREATED: ", JSON.stringify(data));
        this.status = 'CREATE TABLE OK!';
      }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
        this.status = error.message;
      });
  }

}

class Pessoa {
  constructor(){

  }
  id: number;
  nome: string;
  dataCadastro: Date;
};
