import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap, switchMap } from 'rxjs/operators';
import config from "../../../../capacitor.config";


const callbackUri = `${config.appId}://dev-1kv8vrjh.us.auth0.com/capacitor/${config.appId}/callback`;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    
  }

  loginUser() {
    this.auth
      .buildAuthorizeUrl()
      .pipe(mergeMap((url) => Browser.open({ url, windowName: '_self' })))
      .subscribe();
  }

  logoutUser() {
    this.auth
      .buildLogoutUrl({ returnTo: callbackUri })
      .pipe(
        mergeMap(async (url) => {
          await Browser.open({ url, windowName: '_self' });
          this.auth.logout({ localOnly: true });
        })
      )
      .subscribe();
  }

}
