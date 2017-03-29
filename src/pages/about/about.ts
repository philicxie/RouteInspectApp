import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}

  public keys;

  ionViewDidLoad() {
      this.keys = ['apple', 'orange', 'blana'];
  }
}
