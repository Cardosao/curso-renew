import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { TestePage } from '../pages/teste/teste';
import { AlertPage } from '../pages/alert/alert';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {

  public home:any = HomePage;
  public teste:any = TestePage;
  public alert:any = AlertPage;
  public buttons:any = ButtonsPage;
  public cards:any = CardsPage;

  public rootPage:any = this.home;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  public openPage(page) : any {
    this.rootPage = page;
  }



}
