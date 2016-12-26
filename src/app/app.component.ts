import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { TestePage } from '../pages/teste/teste';
import { AlertPage } from '../pages/alert/alert';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { GridPage } from '../pages/grid/grid';
import { ModalPage } from '../pages/modal/modal';
import { NavTestPage } from '../pages/nav-test/nav-test';
import { AbasPage } from '../pages/abas/abas';
import { ToastPage } from '../pages/toast/toast'
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { CameraTestPage } from '../pages/camera-test/camera-test';
import { NetworkTestPage } from '../pages/network-test/network-test';

@Component({
  templateUrl: 'app.html',
})

export class MyApp {

  public pages: Array<any>;
  public rootPage:any = HomePage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    this.initPages();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  private initPages() {
    this.pages = [
      {title: 'Abas', component: AbasPage, icon: ''},
      {title: 'Alert', component: AlertPage, icon: ''},
      {title: 'Buttons', component: ButtonsPage, icon: ''},
      {title: 'Camera', component: CameraTestPage, icon: ''},
      {title: 'Cards', component: CardsPage, icon: ''},
      {title: 'Grid', component: GridPage, icon: ''},
      {title: 'Home', component: HomePage, icon: ''},
      {title: 'Inputs', component: InputsPage, icon: ''},
      {title: 'Lists', component: ListsPage, icon: ''},
      {title: 'Modal', component: ModalPage, icon: ''},
      {title: 'Navigation', component: NavTestPage, icon: ''},
      {title: 'Network', component: NetworkTestPage, icon: ''},
      {title: 'Teste', component: TestePage, icon: ''},
      {title: 'Toasts', component: ToastPage, icon: ''},
      {title: 'Toolbar', component: ToolbarPage, icon: ''},
    ];
  }

  public openPage(page) : any {
    this.menuCtrl.close();
    this.rootPage = page.component;
  }



}
