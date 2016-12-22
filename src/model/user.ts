  import { Component } from '@angular/core';

@Component({})
export class User {

  constructor(){}

  private email:string = "";
  private password:string = "";

  public setEmail(email:string) {
    return this.email = email;
  }

  public getEmail() {
    return this.email;
  }

  public setPassword(password:string) {
    return this.password = password;
  }

  public getPassword() {
    return this.password;
  }
}
