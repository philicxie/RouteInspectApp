
import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';

import { File, Camera } from 'ionic-native';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';


declare var BMap;
declare var cordova: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
   @ViewChild('#container') mapElement: NavController;
  container: any;
  profilePicture: any;

  public message;

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
      console.log(this.navCtrl.parent);
      //this.navCtrl.remove(this.navCtrl.parent);
      this.message = ['11', '22', '33'];
    // var options = {
    //   quality: 50,
    //   destinationType: Camera.DestinationType.FILE_URI,
    //   encodingType: Camera.EncodingType.JPEG,
    //   sourceType: Camera.PictureSourceType.CAMERA
    // };

    // Camera.getPicture(options).then(
    //   (imageData) => {
    //     let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     //alert(imageData);
    //     this.profilePicture = imageData;
    //
    //   }, (err) => {
    //       console.log('error occur:' + err);
    //     }
    // );
    //this.loadMap();
  }
  testNewPage() {
    console.log('hit here');
  }
  loadMap() {
    var map = new BMap.Map(document.getElementById('container'));
    //var map = new BMap.Map(this.mapElement);
    var point = new BMap.Point(116.404, 39.915); //中心点和经纬度
    map.centerAndZoom(point, 10);
    console.log('its ok');
  }
  doAlert() {
      let alert = this.alertCtrl.create({
          title: 'alert',
          subTitle: 'Click a list item',
          buttons: ['Ok']
      });
      alert.present();
  }
}
