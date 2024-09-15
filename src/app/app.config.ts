import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule  } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideFirebaseApp(() => initializeApp({"projectId":"portfolio-dac6b","appId":"1:487689647153:web:e48ac9be8fe0ea9de29110","databaseURL":"https://portfolio-dac6b-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"portfolio-dac6b.appspot.com","apiKey":"AIzaSyA2-F6biULTRLg3hhk1s0dZ7Pm5XFnP5y8","authDomain":"portfolio-dac6b.firebaseapp.com","messagingSenderId":"487689647153","measurementId":"G-98RPGBWKEF"})), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()), 
    provideHttpClient(),
    importProvidersFrom(HttpClientModule,TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ]
};
