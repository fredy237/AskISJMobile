import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';

import { AuthModule } from "@auth0/auth0-angular";
import config from 'capacitor.config';
import { httpInterceptorProviders } from './core/interceptors/index';

// Build the URL that Auth0 should redirect back to
const redirectUri = `${config.appId}://dev-1kv8vrjh.us.auth0.com/capacitor/${config.appId}/callback`;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AuthModule.forRoot({
      domain: "dev-1kv8vrjh.us.auth0.com",
      clientId: "c9QbXrN4PzKUClO4lKfW7vhyAu8a15Oq",
      redirectUri,
      audience: "https://auth0-jwt-authorizer",
      issuer: 'https://dev-1kv8vrjh.us.auth0.com/',
      scope: "openid profile offline_access",
      response_type: "token id_token",
      responseType: 'token id_token',
      algorithms: ['RS256']
    }),
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
