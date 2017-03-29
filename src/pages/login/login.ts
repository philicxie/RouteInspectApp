

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, public toastCtrl: ToastController) {}

  userInfo = {
      Account: '',
      Password: ''
  }

  ionViewDidLoad() {
      
  }

  toMainPage() {
      this.navCtrl.push(TabsPage);
  }

  login() {
      this.toMainPage();
      //this.showToast();
      let url = 'http://192.168.1.59:3000';
      let uri = '/authority/getAllUsers';
      let body = {};
      console.log(this.userInfo.Account);
      this.http.post(url+uri, body)
        .map(res => res.json())
        .subscribe(data => {
            console.log(data);
        });
  }

  showToast() {
      let toast = this.toastCtrl.create({
          message: 'Ops',
          duration: 1500,
          position: "top"
      });
      toast.present();
  }
}
