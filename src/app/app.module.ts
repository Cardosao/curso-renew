import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestePage } from '../pages/teste/teste';
import { AlertPage } from '../pages/alert/alert';
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
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestePage,
    AlertPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
