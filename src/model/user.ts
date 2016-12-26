  import { Component } from '@angular/core';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class User {

  constructor(){}

  public email:string = "";
  public pass:string = "";

  public setEmail(email:string) {
    return this.email = email;
  }

  public getEmail() {
    return this.email;
  }

  public setPass(pass:string) {
    return this.pass = pass;
  }

  public getPass() {
    return this.pass;
  }
}
