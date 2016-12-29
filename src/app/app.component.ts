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
import { NotificationPage } from '../pages/notification/notification';
import { BarScanPage } from '../pages/bar-scan/bar-scan';
import { CepTestPage } from '../pages/cep-test/cep-test';
import { GeoTestPage } from '../pages/geo-test/geo-test';
import { SqlLiteTestPage } from '../pages/sql-lite-test/sql-lite-test';

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
      {title: 'Cep', component: CepTestPage,  icon: 'mail'},
      {title: 'GeoLocalization', component: GeoTestPage,  icon: 'globe'},
      {title: 'SQLite', component: SqlLiteTestPage,  icon: 'cube'},
      {title: 'BarScanner', component: BarScanPage,  icon: 'barcode'},
      {title: 'Notification', component: NotificationPage,  icon: 'notifications'},
      {title: 'Abas', component: AbasPage, icon: 'swap'},
      {title: 'Alert', component: AlertPage, icon: 'notifications'},
      {title: 'Buttons', component: ButtonsPage, icon: 'calculator'},
      {title: 'Camera', component: CameraTestPage, icon: 'camera'},
      {title: 'Cards', component: CardsPage, icon: 'calendar'},
      {title: 'Grid', component: GridPage, icon: 'apps'},
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Inputs', component: InputsPage, icon: 'checkbox'},
      {title: 'Lists', component: ListsPage, icon: 'menu'},
      {title: 'Modal', component: ModalPage, icon: 'albuns'},
      {title: 'Navigation', component: NavTestPage, icon: 'albuns'},
      {title: 'Network', component: NetworkTestPage, icon: 'git-network'},
      {title: 'Teste', component: TestePage, icon: 'eye'},
      {title: 'Toasts', component: ToastPage, icon: 'at'},
      {title: 'Toolbar', component: ToolbarPage, icon: 'game-controller-a'},
    ];
  }

  public openPage(page, side) : any {
    this.rootPage = page.component;
    this.menuCtrl.close(side);
  }



}
