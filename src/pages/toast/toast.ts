import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html'
})
export class ToastPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('Hello ToastPage Page');
  }

  showToast() {
    let t = this.toastCtrl.create({
      message: "Olá mundo",
      duration: 2000,
      dismissOnPageChange: true,
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'OK',
      cssClass: 'secondary'
    });
    t.present();
    t.onDidDismiss(()=>{
      console.info("FECHOU O TOAST");
    });
    t.onWillDismiss(()=>{
      console.info("TO FECHANDO O TOAST");
    });
  }

}
