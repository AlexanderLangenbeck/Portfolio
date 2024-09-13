import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"portfolio-dac6b","appId":"1:487689647153:web:e48ac9be8fe0ea9de29110","databaseURL":"https://portfolio-dac6b-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"portfolio-dac6b.appspot.com","apiKey":"AIzaSyA2-F6biULTRLg3hhk1s0dZ7Pm5XFnP5y8","authDomain":"portfolio-dac6b.firebaseapp.com","messagingSenderId":"487689647153","measurementId":"G-98RPGBWKEF"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideHttpClient()]
};
