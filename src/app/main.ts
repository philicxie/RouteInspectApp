import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import { ThreeDeeTouch } from 'ionic-native';

import { ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from 'ionic-native';

platformBrowserDynamic().bootstrapModule(AppModule);

let actions: Array<ThreeDeeTouchQuickAction> = [
    {
      type: 'checkin',
      title: 'Check in',
      subtitle: 'Quickly check in',
      iconType: 'Compose'
    },
  {
    type: 'share',
    title: 'Share',
        subtitle: 'Share like you care',
        iconType: 'Share'
    },
    {
        type: 'search',
        title: 'Search',
        iconType: 'Search'
    },
    {
        title: 'Show favorites',
        iconTemplate: 'HeartTemplate'
    }
];
ThreeDeeTouch.configureQuickActions(actions);

ThreeDeeTouch.onHomeIconPressed().subscribe(
    (payload) => {
        // returns an object that is the button you presed
        console.log('Pressed the ${payload.title} button')
        console.log(payload.type)

    }
);
