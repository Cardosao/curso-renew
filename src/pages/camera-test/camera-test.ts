import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-camera-test',
  templateUrl: 'camera-test.html',
  providers: [Camera]
})
export class CameraTestPage {

  image: any;
  status: string;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CameraTestPage Page');
  }

  public fotografar() {
    Camera.getPicture({
      quality: 50,
      cameraDirection: Camera.Direction.BACK,
      encodingType: Camera.EncodingType.PNG,
      destinationType: Camera.DestinationType.DATA_URL,
    }).then((imageData) => {
      console.log("Camera acionada!");
      this.status = "Camera acionada!";
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.image = base64Image;
    }, (err) => {
     console.error(err);
       this.status = err;
    });
  }

}
