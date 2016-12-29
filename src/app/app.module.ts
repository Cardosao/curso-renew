import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { MyApp } from './app.component';

import { AbasPage } from '../pages/abas/abas';
import { AlertPage } from '../pages/alert/alert';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CameraTestPage } from '../pages/camera-test/camera-test';
import { CardsPage } from '../pages/cards/cards';
import { ContatosPage } from '../pages/contatos/contatos';
import { ErrorPage } from '../pages/error/error';
import { GridPage } from '../pages/grid/grid';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { ModalPage } from '../pages/modal/modal';
import { ModalLoginPage } from '../pages/modal-login/modal-login';
import { NavTestPage } from '../pages/nav-test/nav-test';
import { TestePage } from '../pages/teste/teste';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { NetworkTestPage } from '../pages/network-test/network-test';
import { NotificationPage } from '../pages/notification/notification';
import { BarScanPage } from '../pages/bar-scan/bar-scan';
import { CepTestPage } from '../pages/cep-test/cep-test';
import { GeoTestPage } from '../pages/geo-test/geo-test';
import { SqlLiteTestPage } from '../pages/sql-lite-test/sql-lite-test';

import { User } from '../model/user';

import { ApiService } from '../providers/api-service';
import { Login } from '../providers/login';
import { HttpInterceptor } from '../providers/http-interceptor';
import { CepService } from '../providers/cep-service';

import { Camera } from 'ionic-native';
import { Network, Diagnostic} from 'ionic-native';

/**
* Se for utilizar algo especifico em uma pagina importa lá
* caso seja algo que sera usado em varias carrega aqui no ngModule
*/
import { Uppercase } from '../pipes/uppercase';

/**
* Pipes e providers sao providers no @Component
*/

@NgModule({
  declarations: [
    MyApp,
    Uppercase,
    HomePage,
    TestePage,
    AlertPage,
    ButtonsPage,
    CardsPage,
    InputsPage,
    ListsPage,
    ErrorPage,
    GridPage,
    ModalPage,
    ModalLoginPage,
    NavTestPage,
    AbasPage,
    InicioPage,
    ContatosPage,
    ToastPage,
    ToolbarPage,
    CameraTestPage,
    User,
    NetworkTestPage,
    NotificationPage,
    BarScanPage,
    CepTestPage,
    GeoTestPage,
    SqlLiteTestPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestePage,
    AlertPage,
    ButtonsPage,
    CardsPage,
    InputsPage,
    ListsPage,
    ErrorPage,
    GridPage,
    ModalPage,
    ModalLoginPage,
    NavTestPage,
    AbasPage,
    InicioPage,
    ContatosPage,
    ToastPage,
    ToolbarPage,
    CameraTestPage,
    User,
    NetworkTestPage,
    NotificationPage,
    BarScanPage,
    CepTestPage,
    GeoTestPage,
    SqlLiteTestPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    BaseRequestOptions,
    HttpInterceptor,
    ApiService,
    Login,
    Camera,
    Network,
    Diagnostic,
    CepService,
  ]
})
export class AppModule {}
