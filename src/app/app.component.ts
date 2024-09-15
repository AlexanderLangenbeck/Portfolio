import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { AboutMeComponent } from './landing-page/about-me/about-me.component';
import { MySkillsComponent } from './landing-page/my-skills/my-skills.component';
import { PortfolioComponent } from './landing-page/portfolio/portfolio.component';
import { MainFooterComponent } from './landing-page/main-footer/main-footer.component';
import { ContactComponent } from './landing-page/contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    WelcomeComponent, 
    AboutMeComponent, 
    MySkillsComponent, 
    PortfolioComponent,
    MainFooterComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  
  title = 'Portfolio';
}
