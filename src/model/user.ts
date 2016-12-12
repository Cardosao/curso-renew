  import { Component } from '@angular/core';

@Component({})
export class User {

  constructor(){}

  private email:string = "fabiano@cardosao.com";
  private password:string = "123";

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
