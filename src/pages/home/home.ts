// import { Component } from '@angular/core';
//
// import { NavController } from 'ionic-angular';
//
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//
//   constructor(public navCtrl: NavController) {
//
//   }
//
// }

// import { Component } from '@angular/core';
//
// import { AlertController } from 'ionic-angular';
//
//
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
//
// })
// export class HomePage {
//
//   constructor(public alerCtrl: AlertController) { }
//
//   doAlert() {
//     console.log('haha');
//     let alert = this.alerCtrl.create({
//       title: 'New Friend!',
//       message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
//       buttons: ['Ok']
//     });
//     alert.present()
//   }
//
// }

import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';

import { File, Camera } from 'ionic-native';


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

  constructor(private navCtrl: NavController) {
  }
  ionViewDidLoad() {
    console.log("12312312");
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      encodingType: Camera.EncodingType.JPEG,
      sourceType: Camera.PictureSourceType.CAMERA
    };
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
  loadMap() {


    var map = new BMap.Map(document.getElementById('container'));
    //var map = new BMap.Map(this.mapElement);
    var point = new BMap.Point(116.404, 39.915); //中心点和经纬度
    map.centerAndZoom(point, 10);
    console.log('its ok');


  }
}
