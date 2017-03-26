import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public loadingCtrl: LoadingController) {

  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: 'please wait...',
      duration: 3000
    });
    loader.present();
  }
}
