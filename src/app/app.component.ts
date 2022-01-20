import { Component, NgZone } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { App } from '@capacitor/app';
import { mergeMap } from 'rxjs/operators';
import config from 'capacitor.config';
import { Browser } from '@capacitor/browser';

const callbackUri = `${config.appId}://dev-1kv8vrjh.us.auth0.com/capacitor/${config.appId}/callback`;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public auth: AuthService, private ngZone: NgZone) {}

  ngOnInit(): void {

    // Use Capacitor's App plugin to subscribe to the `appUrlOpen` event
    App.addListener('appUrlOpen', ({ url }) => {
      // Must run inside an NgZone for Angular to pick up the changes
      // https://capacitorjs.com/docs/guides/angular
      this.ngZone.run(() => {
        if (url?.startsWith(callbackUri)) {

          // If the URL is an authentication callback URL..
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            // Call handleRedirectCallback and close the browser
            this.auth
              .handleRedirectCallback(url)
              .pipe(mergeMap(() => Browser.close()))
              .subscribe();
          } else {
            Browser.close();
          }
        }
      });
    });
  }
}
