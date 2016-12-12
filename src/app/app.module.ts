import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TestePage } from '../pages/teste/teste';
import { AlertPage } from '../pages/alert/alert';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { ErrorPage } from '../pages/error/error';
import { GridPage } from '../pages/grid/grid';
import { ModalPage } from '../pages/modal/modal';
import { ModalLoginPage } from '../pages/modal-login/modal-login';

import { ApiService } from '../providers/api-service';
import { Login } from '../providers/login';
import { HttpInterceptor } from '../providers/http-interceptor';

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
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    BaseRequestOptions,
    AUTH_PROVIDERS,
    HttpInterceptor,
    ApiService,
    Login,
  ]
})
export class AppModule {}
