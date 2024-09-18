import { provideRouter, Routes } from '@angular/router';
import {ImpressumComponent} from './impressum/impressum.component'
import {LandingPageComponent} from './landing-page/landing-page.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'privacyPolicy', component: PrivacyPolicyComponent},
    
];

export const routerProviders = [
    provideRouter(routes)
];