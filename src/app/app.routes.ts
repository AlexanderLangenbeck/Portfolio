import { Routes } from '@angular/router';
import {ImpressumComponent} from './impressum/impressum.component'
import {LandingPageComponent} from './landing-page/landing-page.component'

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'impressum', component: ImpressumComponent},
    
];
