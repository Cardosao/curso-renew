import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  stt: string;
  not: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    LocalNotifications.on('click', (notification, state) => {
      this.stt = state;
      this.not = notification;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  public send() {
    LocalNotifications.schedule({
      id: 1,
      text: 'Novo Lançamento!',
      sound: null,
      data: {secrect: 'olá mundo'}
    });
  }

}
